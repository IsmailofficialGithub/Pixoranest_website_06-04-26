import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | PixoraNest AI Automation",
  description:
    "Read the PixoraNest Terms of Service outlining the conditions, responsibilities, and legal terms governing the use of our AI automation services.",
  keywords: [
    "PixoraNest terms of service",
    "AI automation terms and conditions",
    "website terms of service",
    "AI services terms of use",
    "PixoraNest legal terms",
  ],
  alternates: {
    canonical: "https://pixoranest.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-foreground">Terms of Service</h1>

        <p className="mb-6 text-sm text-muted-foreground">
          Last updated: February 27, 2026
        </p>

        <div className="space-y-8 text-base leading-relaxed text-muted-foreground">

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using PixoraNest's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and others who access or use our AI automation services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">2. Description of Services</h2>
            <p>
              PixoraNest provides AI automation solutions including but not limited to AI receptionist services, WhatsApp automation, call automation, voice agents, social media automation, and CRM workflow automation. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">3. User Responsibilities</h2>
            <p className="mb-3">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information when using our services.</li>
              <li>Use our services only for lawful purposes and in compliance with all applicable laws.</li>
              <li>Not misuse, reverse engineer, or attempt to gain unauthorized access to our systems.</li>
              <li>Not use our services to send spam, unsolicited messages, or harmful content.</li>
              <li>Maintain the confidentiality of your account credentials.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">4. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property on this website are owned by PixoraNest (Occumenical Tech Solution OPC Private Limited). You may not reproduce, distribute, or create derivative works without our express written permission. Any unauthorized use of our intellectual property is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">5. Payment and Billing</h2>
            <p>
              All pricing for PixoraNest services is custom and discussed during the onboarding process. Payment terms will be outlined in your individual service agreement. We reserve the right to change pricing with reasonable notice. Refunds are subject to the terms of your specific service agreement.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
            <p>
              PixoraNest shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim in the three months preceding the event.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">7. Data and Privacy</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection and use of data as described in our Privacy Policy. We implement appropriate security measures to protect your data against unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">8. WhatsApp and Third-Party Platforms</h2>
            <p>
              Our WhatsApp automation services operate through the official WhatsApp Business API in compliance with Meta's policies. Messages are sent only to users who have opted in. You are responsible for ensuring your use of our WhatsApp automation services complies with all applicable regulations and Meta's terms of service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services at any time, with or without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties. Upon termination, your right to use our services will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">10. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Rajasthan, India.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">11. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. We will notify users of significant changes by updating the date at the top of this page. Your continued use of our services after any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">12. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <ul className="mt-3 list-none space-y-1">
              <li><strong className="text-foreground">Company:</strong> Occumenical Tech Solution (OPC) Private Limited</li>
              <li><strong className="text-foreground">Brand:</strong> PixoraNest</li>
              <li><strong className="text-foreground">Email:</strong> info@pixoranest.com</li>
              <li><strong className="text-foreground">Phone:</strong> +91 94606 86266</li>
              <li><strong className="text-foreground">Address:</strong> 1st Floor, near Tehsil Bhawan, Narayanpur, Rajasthan 301024, India</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  )
}