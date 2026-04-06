import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | PixoraNest AI Automation",

  description:
    "Read the PixoraNest Privacy Policy to understand how we collect, use, and protect personal information when using our AI automation services and website.",

  keywords: [
    "PixoraNest privacy policy",
    "AI automation privacy policy",
    "data protection policy PixoraNest",
    "website privacy policy",
    "AI services privacy policy",
  ],

  alternates: {
    canonical: "https://pixoranest.com/privacy-policy",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-foreground">Privacy Policy</h1>

        <p className="mb-6 text-sm text-muted-foreground">
          Last updated: February 27, 2026
        </p>

        <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, such as when you
              fill out a contact form, subscribe to our newsletter, request a
              demo, or communicate with us. This may include your name, email
              address, phone number, company name, and any other information you
              choose to provide.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>

            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Provide, maintain, and improve our AI automation services</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Send technical updates and service notifications</li>
              <li>Communicate about PixoraNest products and services</li>
              <li>Monitor usage and improve website performance</li>
              <li>Detect and prevent fraud or security incidents</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              3. Information Sharing
            </h2>

            <p>
              PixoraNest does not sell, trade, or transfer your personal
              information to third parties without consent, except when required
              to deliver services, comply with legal obligations, or protect our
              rights.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              4. Data Security
            </h2>

            <p>
              We implement appropriate technical and organizational safeguards
              to protect your personal information. However, no method of
              internet transmission or electronic storage can guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              5. Cookies and Tracking Technologies
            </h2>

            <p>
              Our website uses cookies and similar tracking technologies to
              enhance user experience and analyze website traffic. You may
              disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              6. Your Data Rights
            </h2>

            <p>
              Depending on your location, you may have rights regarding your
              personal data including access, correction, deletion, or data
              portability. To request access or modification of your data,
              contact us at info@pixoranest.com.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              7. Contact Us
            </h2>

            <p>
              If you have questions about this Privacy Policy or how PixoraNest
              handles your data, please contact us at info@pixoranest.com or via
              our contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}