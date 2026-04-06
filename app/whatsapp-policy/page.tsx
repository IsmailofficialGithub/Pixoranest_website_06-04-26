import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WhatsApp Business Policy",
  description: "PixoraNest WhatsApp Business Policy — guidelines for our WhatsApp automation services.",
}

export default function WhatsAppPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-foreground">WhatsApp Business Policy</h1>
        <p className="mb-6 text-sm text-muted-foreground">Last updated: February 27, 2026</p>

        <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">1. Overview</h2>
            <p>
              This policy outlines the guidelines and best practices for using PixoraNest WhatsApp automation services. Our services are built on top of the official WhatsApp Business API and comply with Meta WhatsApp Business policies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">2. Acceptable Use</h2>
            <p>Our WhatsApp automation services must be used for:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Legitimate business communication with opted-in customers</li>
              <li>Customer support and service inquiries</li>
              <li>Order updates, appointment reminders, and transactional notifications</li>
              <li>Marketing messages to users who have provided explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">3. Prohibited Use</h2>
            <p>The following activities are strictly prohibited:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Sending unsolicited messages (spam)</li>
              <li>Sharing misleading or false information</li>
              <li>Distributing harmful, abusive, or illegal content</li>
              <li>Collecting personal data without proper consent</li>
              <li>Impersonating other businesses or individuals</li>
              <li>Circumventing WhatsApp rate limits or policies</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">4. Opt-In Requirements</h2>
            <p>
              All recipients of automated WhatsApp messages must have explicitly opted in to receive communications. Businesses must maintain clear records of consent and provide an easy opt-out mechanism for all recipients.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">5. Message Templates</h2>
            <p>
              All outbound messages initiated by businesses must use pre-approved message templates as required by the WhatsApp Business API. Templates must be submitted for review and approval before use.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">6. Data Handling</h2>
            <p>
              All data collected through WhatsApp communications is handled in accordance with our Privacy Policy. We implement end-to-end encryption, secure storage practices, and data retention policies compliant with applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">7. Compliance</h2>
            <p>
              Clients using our WhatsApp automation services are responsible for ensuring their communications comply with all applicable laws, including GDPR, CCPA, TCPA, and local regulations. Failure to comply may result in suspension of services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">8. Contact</h2>
            <p>
              For questions about this WhatsApp Business Policy, please contact us at info@pixoranest.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
