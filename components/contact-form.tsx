'use client'

import type { FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} aria-describedby="quote-form-note">
      <div className="quote-form-grid">
        <label className="quote-field">
          <span>Name <b aria-hidden="true">*</b></span>
          <input autoComplete="name" name="name" required />
        </label>
        <label className="quote-field">
          <span>Email <b aria-hidden="true">*</b></span>
          <input autoComplete="email" name="email" type="email" required />
        </label>
        <label className="quote-field">
          <span>Phone</span>
          <input autoComplete="tel" name="phone" type="tel" />
        </label>
        <label className="quote-field">
          <span>City or ZIP code</span>
          <input autoComplete="postal-code" name="cityOrZip" />
        </label>
        <label className="quote-field">
          <span>Project type <b aria-hidden="true">*</b></span>
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option>Full Yard Remodels</option>
            <option>Hardscape</option>
            <option>Outdoor Living</option>
            <option>Pools</option>
            <option>Planting</option>
          </select>
        </label>
        <label className="quote-field">
          <span>Estimated budget</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>Under $5,000</option>
            <option>$5,000-$15,000</option>
            <option>$15,000-$30,000</option>
            <option>$30,000+</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="quote-field">
          <span>Desired timeline</span>
          <select name="timeline" defaultValue="">
            <option value="" disabled>Select a timeline</option>
            <option>As soon as possible</option>
            <option>Within 1-3 months</option>
            <option>Within 3-6 months</option>
            <option>Planning ahead</option>
          </select>
        </label>
        <fieldset className="quote-field quote-contact-preference">
          <legend>Preferred contact method</legend>
          <label><input type="radio" name="contactMethod" value="email" defaultChecked /> Email</label>
          <label><input type="radio" name="contactMethod" value="phone" /> Phone</label>
        </fieldset>
        <label className="quote-field quote-field-wide">
          <span>Project description <b aria-hidden="true">*</b></span>
          <textarea name="description" rows={5} required />
        </label>
      </div>
      <div className="quote-form-submit">
        <button className="button button-dark" type="submit">Request a Quote <ArrowRight size={16} aria-hidden="true" /></button>
        <p id="quote-form-note">This form is a preview and is not connected to a submission service yet.</p>
      </div>
    </form>
  )
}
