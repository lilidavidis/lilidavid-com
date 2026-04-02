import { useState } from 'react';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [values, setValues] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setState('sent');
        setValues({ name: '', email: '', organisation: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <h3>Message received</h3>
        <p>Thank you for getting in touch. I'll be back to you shortly.</p>
        <button
          className="btn btn--outline"
          style={{ marginTop: '1.5rem' }}
          onClick={() => setState('idle')}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Your name <span className="required">*</span></label>
          <input
            className="form-input"
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email address <span className="required">*</span></label>
          <input
            className="form-input"
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="organisation">Organisation <span className="optional">(optional)</span></label>
        <input
          className="form-input"
          id="organisation"
          name="organisation"
          type="text"
          value={values.organisation}
          onChange={handleChange}
          placeholder="Your company or team"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">Your message <span className="required">*</span></label>
        <textarea
          className="form-textarea"
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          required
          placeholder="Tell me a little about your situation and what you're hoping for…"
          rows={6}
        />
      </div>

      {state === 'error' && (
        <p className="form-error">
          Something went wrong — please try again or reach out directly by email.
        </p>
      )}

      <button
        className="btn btn--primary"
        type="submit"
        disabled={state === 'sending'}
        style={{ marginTop: '0.5rem' }}
      >
        {state === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
