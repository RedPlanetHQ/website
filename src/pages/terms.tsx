import { ScrollArea } from '@redplanethq/ui';

import { Container, Header } from 'src/components';

const Terms = () => {
  return (
    <div className="flex min-h-svh h-[100vh] flex-col items-center justify-start overflow-hidden bg-background">
      <ScrollArea className="overflow-auto flex flex-col h-full w-full">
        <Header />

        <Container className="py-[3rem] max-w-[40rem]">
          <h1 className="text-3xl font-bold">Terms of Service</h1>

          <div className="text-sm text-muted-foreground mb-8">
            <p>
              <strong>Effective Date:</strong> 29 July, 2025
            </p>

            <p>
              <strong>Contact:</strong> manik@poozle.dev
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm leading-relaxed">
                By accessing or using Poozle Inc&apos;s cloud infrastructure
                services (&quot;Services&quot;), you agree to be bound by these
                Terms of Service (&quot;Terms&quot;). If you are entering into
                these Terms on behalf of a company or other legal entity, you
                represent that you have the authority to bind such entity to
                these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                2. Description of Services
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                Poozle Inc provides cloud infrastructure specifically designed
                for AI memory storage, retrieval, and management (&quot;Memory
                Infrastructure&quot;). Our Services include:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Scalable memory storage for AI applications</li>
                <li>High-performance data retrieval systems</li>
                <li>Memory optimization and caching solutions</li>
                <li>API access for AI memory management</li>
                <li>Related cloud infrastructure services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                3. Account Registration and Security
              </h2>

              <h3 className="text-lg font-medium mb-3">3.1 Account Creation</h3>
              <p className="text-sm leading-relaxed mb-4">
                You must provide accurate, current, and complete information
                during registration and maintain the accuracy of your account
                information.
              </p>

              <h3 className="text-lg font-medium mb-3">3.2 Security</h3>
              <p className="text-sm leading-relaxed mb-4">
                You are responsible for maintaining the security of your account
                credentials and all activities under your account. Notify us
                immediately of any unauthorized access.
              </p>

              <h3 className="text-lg font-medium mb-3">3.3 Eligibility</h3>
              <p className="text-sm leading-relaxed">
                You must be at least 18 years old and have the legal capacity to
                enter into this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                4. Acceptable Use Policy
              </h2>

              <h3 className="text-lg font-medium mb-3">4.1 Permitted Use</h3>
              <p className="text-sm leading-relaxed mb-4">
                You may use our Services only for lawful purposes and in
                accordance with these Terms.
              </p>

              <h3 className="text-lg font-medium mb-3">
                4.2 Prohibited Activities
              </h3>
              <p className="text-sm leading-relaxed mb-3">You may not:</p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 mb-4">
                <li>
                  Use the Services for illegal activities or to violate any laws
                </li>
                <li>
                  Store, process, or transmit malicious code, viruses, or
                  harmful content
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems or other
                  users&apos; data
                </li>
                <li>
                  Use the Services to infringe intellectual property rights
                </li>
                <li>Engage in activities that could harm minors</li>
                <li>
                  Reverse engineer, decompile, or attempt to extract source code
                </li>
                <li>
                  Resell or redistribute the Services without written permission
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-3">4.3 AI Ethics</h3>
              <p className="text-sm leading-relaxed">
                When using our memory infrastructure for AI applications, you
                agree to use responsible AI practices and comply with applicable
                AI ethics guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                5. Data and Privacy
              </h2>

              <h3 className="text-lg font-medium mb-3">5.1 Your Data</h3>
              <p className="text-sm leading-relaxed mb-4">
                You retain ownership of all data you store using our Services
                ((&quot;Customer Data(&quot;). You grant us the right to store,
                process, and transmit Customer Data solely to provide the
                Services.
              </p>

              <h3 className="text-lg font-medium mb-3">5.2 Data Protection</h3>
              <p className="text-sm leading-relaxed mb-4">
                We implement industry-standard security measures to protect your
                data. However, no system is completely secure, and you
                acknowledge the inherent risks of cloud storage.
              </p>

              <h3 className="text-lg font-medium mb-3">5.3 Privacy Policy</h3>
              <p className="text-sm leading-relaxed mb-4">
                Our collection and use of personal information is governed by
                our Privacy Policy, incorporated by reference.
              </p>

              <h3 className="text-lg font-medium mb-3">5.4 Data Location</h3>
              <p className="text-sm leading-relaxed">
                Customer Data may be stored and processed in various geographic
                locations to optimize performance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                6. Service Availability and Performance
              </h2>

              <h3 className="text-lg font-medium mb-3">6.1 Uptime</h3>
              <p className="text-sm leading-relaxed mb-4">
                We strive to maintain high service availability but do not
                guarantee uninterrupted access to the Services.
              </p>

              <h3 className="text-lg font-medium mb-3">6.2 Maintenance</h3>
              <p className="text-sm leading-relaxed mb-4">
                We may perform scheduled maintenance that temporarily affects
                service availability. We will provide reasonable notice when
                possible.
              </p>

              <h3 className="text-lg font-medium mb-3">6.3 Performance</h3>
              <p className="text-sm leading-relaxed">
                While we optimize for performance, actual results may vary based
                on usage patterns, data complexity, and network conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                7. Billing and Payment
              </h2>

              <h3 className="text-lg font-medium mb-3">7.1 Fees</h3>
              <p className="text-sm leading-relaxed mb-4">
                You agree to pay all applicable fees as specified in your
                service plan. Fees are based on usage, storage, and selected
                service tiers.
              </p>

              <h3 className="text-lg font-medium mb-3">7.2 Payment Terms</h3>
              <p className="text-sm leading-relaxed mb-4">
                Payments are due according to your billing cycle. Overdue
                amounts may result in service suspension.
              </p>

              <h3 className="text-lg font-medium mb-3">7.3 Fee Changes</h3>
              <p className="text-sm leading-relaxed mb-4">
                We may modify fees with 30 days&apos; written notice. Continued
                use after notice constitutes acceptance of new fees.
              </p>

              <h3 className="text-lg font-medium mb-3">7.4 Taxes</h3>
              <p className="text-sm leading-relaxed">
                You are responsible for all applicable taxes, except those based
                on our net income.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                8. Intellectual Property
              </h2>

              <h3 className="text-lg font-medium mb-3">8.1 Our IP</h3>
              <p className="text-sm leading-relaxed mb-4">
                Poozle Inc retains all rights to our technology, software, and
                platform. These Terms grant you only a limited license to use
                the Services.
              </p>

              <h3 className="text-lg font-medium mb-3">8.2 Customer IP</h3>
              <p className="text-sm leading-relaxed mb-4">
                You retain ownership of your intellectual property. We do not
                claim rights to your AI models, algorithms, or applications.
              </p>

              <h3 className="text-lg font-medium mb-3">8.3 Feedback</h3>
              <p className="text-sm leading-relaxed">
                Any feedback you provide about our Services may be used by us
                without restriction or compensation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>

              <h3 className="text-lg font-medium mb-3">9.1 Liability Cap</h3>
              <p className="text-sm leading-relaxed mb-4">
                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS OR
                THE SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN THE 12
                MONTHS PRECEDING THE CLAIM.
              </p>

              <h3 className="text-lg font-medium mb-3">9.2 Excluded Damages</h3>
              <p className="text-sm leading-relaxed mb-4">
                WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR
                DATA.
              </p>

              <h3 className="text-lg font-medium mb-3">9.3 No Warranties</h3>
              <p className="text-sm leading-relaxed">
                THE SERVICES ARE PROVIDED (&quot;AS IS(&quot; WITHOUT WARRANTIES
                OF ANY KIND, EXPRESS OR IMPLIED.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                10. Indemnification
              </h2>
              <p className="text-sm leading-relaxed">
                You agree to indemnify and hold harmless Poozle Inc from any
                claims, damages, or expenses arising from your use of the
                Services, violation of these Terms, or infringement of any
                rights of another party.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">11. Termination</h2>

              <h3 className="text-lg font-medium mb-3">11.1 By You</h3>
              <p className="text-sm leading-relaxed mb-4">
                You may terminate your account at any time by following our
                account closure procedures.
              </p>

              <h3 className="text-lg font-medium mb-3">11.2 By Us</h3>
              <p className="text-sm leading-relaxed mb-4">
                We may suspend or terminate your access for violations of these
                Terms, non-payment, or other reasonable cause with appropriate
                notice.
              </p>

              <h3 className="text-lg font-medium mb-3">
                11.3 Effect of Termination
              </h3>
              <p className="text-sm leading-relaxed">
                Upon termination, your right to use the Services ceases. We will
                provide reasonable time to retrieve your data, after which it
                may be deleted.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                12. Compliance and Export Controls
              </h2>
              <p className="text-sm leading-relaxed">
                You agree to comply with all applicable laws, including export
                control laws and regulations. You represent that you are not
                located in a country subject to comprehensive sanctions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                13. Modifications to Terms
              </h2>
              <p className="text-sm leading-relaxed">
                We may modify these Terms by posting updated versions on our
                website. Material changes will be communicated with 30
                days&apos; notice. Continued use constitutes acceptance of
                modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                14. Dispute Resolution
              </h2>

              <h3 className="text-lg font-medium mb-3">14.1 Governing Law</h3>
              <p className="text-sm leading-relaxed mb-4">
                These Terms are governed by the laws of [Your Jurisdiction],
                without regard to conflict of law principles.
              </p>

              <h3 className="text-lg font-medium mb-3">
                14.2 Dispute Resolution
              </h3>
              <p className="text-sm leading-relaxed">
                Any disputes shall be resolved through binding arbitration in
                accordance with the rules of [Arbitration Organization], except
                for claims of intellectual property infringement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                15. General Provisions
              </h2>

              <h3 className="text-lg font-medium mb-3">
                15.1 Entire Agreement
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                These Terms constitute the entire agreement between you and
                Poozle Inc regarding the Services.
              </p>

              <h3 className="text-lg font-medium mb-3">15.2 Severability</h3>
              <p className="text-sm leading-relaxed mb-4">
                If any provision is found unenforceable, the remainder of these
                Terms remains in effect.
              </p>

              <h3 className="text-lg font-medium mb-3">15.3 Assignment</h3>
              <p className="text-sm leading-relaxed mb-4">
                You may not assign these Terms without our written consent. We
                may assign these Terms in connection with a merger, acquisition,
                or sale of assets.
              </p>

              <h3 className="text-lg font-medium mb-3">15.4 Force Majeure</h3>
              <p className="text-sm leading-relaxed">
                Neither party is liable for delays or failures due to
                circumstances beyond reasonable control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                16. Contact Information
              </h2>
              <p className="text-sm leading-relaxed mb-3">
                For questions about these Terms or our Services, contact us at:
              </p>
              <div className="text-sm leading-relaxed">
                <p>
                  <strong>Email:</strong> manik@poozle.dev
                </p>
                <p>
                  <strong>Subject Line:</strong> Terms of Service Inquiry
                </p>
              </div>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm leading-relaxed">
                These Terms of Service govern your use of Poozle Inc&apos;s
                Services. By using our Services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms.
              </p>
            </section>
          </div>
        </Container>
      </ScrollArea>
    </div>
  );
};

export default Terms;
