import { ScrollArea } from '@redplanethq/ui';

import { Container, Header } from 'src/components';

const Privacy = () => {
  return (
    <div className="flex min-h-svh h-[100vh] flex-col items-center justify-start overflow-hidden bg-background">
      <ScrollArea className="overflow-auto flex flex-col h-full w-full">
        <Header />

        <Container className="pt-[3rem] max-w-[40rem]">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="text-sm text-muted-foreground mb-8">
            <p><strong>Effective Date:</strong> 29/07/2025</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <p className="text-sm leading-relaxed">
                This Privacy Policy describes how Poozle Inc. ("Company," "we," "us," or "our") collects, uses, and protects information in connection with our cloud services ("Services"). This policy applies to all users of our Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Information Collection & Account Information</h2>
              <p className="text-sm leading-relaxed mb-3">
                We collect and maintain the following account-related information:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Full name</li>
                <li>Email address</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">User Data</h2>
              <p className="text-sm leading-relaxed mb-3">
                We store and process user data that is uploaded to or created within our Services, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Documents, files, and content uploaded by users</li>
                <li>Data synchronized from connected third-party services</li>
                <li>User-generated content and configurations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Connected Services Data</h2>
              <p className="text-sm leading-relaxed mb-3">
                With explicit user consent, we may access and store data from third-party services that users choose to connect, including:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Linear</li>
                <li>Slack</li>
                <li>Other productivity and storage services as authorized by the user</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Technical Information</h2>
              <p className="text-sm leading-relaxed mb-3">
                We collect technical data necessary for service operation and security, including:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Authentication logs</li>
                <li>Service access records</li>
                <li>System performance metrics</li>
                <li>API usage logs for connected services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Use of Information</h2>
              <p className="text-sm leading-relaxed mb-3">
                The information we collect is used for:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Account creation and management</li>
                <li>Service authentication and access control</li>
                <li>Data storage, processing, and retrieval as requested by users</li>
                <li>Integration with third-party services as authorized by users</li>
                <li>Essential service communications</li>
                <li>System security and operational maintenance</li>
                <li>Service improvement and feature development</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Data Processing</h2>
              
              <h3 className="text-lg font-medium mb-3">User Content and Data</h3>
              <p className="text-sm leading-relaxed mb-4">
                We store and process user data as part of our core service functionality. This includes data uploaded directly by users and data accessed from connected third-party services with proper authorization.
              </p>

              <h3 className="text-lg font-medium mb-3">Third-Party Service Integration</h3>
              <p className="text-sm leading-relaxed mb-3">
                Users may authorize connections to external services such as Linear, Slack, and other productivity platforms. Such integrations require:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 mb-4">
                <li>Explicit user consent for each service connection</li>
                <li>Developer authorization where applicable</li>
                <li>Adherence to the connected service's terms and data handling requirements</li>
              </ul>
              <p className="text-sm leading-relaxed mb-4">
                Data accessed through these integrations is processed in accordance with user instructions and this Privacy Policy.
              </p>

              <h3 className="text-lg font-medium mb-3">Third-Party AI Processing</h3>
              <p className="text-sm leading-relaxed">
                When users elect to utilize artificial intelligence features, content may be processed by third-party AI service providers, including OpenAI, Anthropic and Google Gemini. Such processing occurs solely at user direction and for the purpose of delivering requested functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Data Security</h2>
              
              <h3 className="text-lg font-medium mb-3">Encryption</h3>
              <p className="text-sm leading-relaxed mb-4">
                All data transmissions are protected using industry-standard encryption protocols during transit between user systems and our infrastructure.
              </p>

              <h3 className="text-lg font-medium mb-3">Infrastructure Partners</h3>
              <p className="text-sm leading-relaxed mb-3">
                We utilize trusted third-party service providers for infrastructure operations:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>AWS for database and hosting services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Information Disclosure</h2>
              <p className="text-sm leading-relaxed mb-3">
                We do not sell, rent, or otherwise commercially distribute personal information. Information may be disclosed only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 mb-4">
                <li>To infrastructure service providers as necessary for service operation</li>
                <li>To third-party AI services when users elect to use AI features</li>
                <li>To connected third-party services as explicitly authorized by users (Linear, Slack, etc.)</li>
                <li>When required by applicable law or legal process</li>
                <li>To protect the rights, property, or safety of the Company or others</li>
                <li>In connection with a corporate transaction such as merger or acquisition</li>
              </ul>
              <p className="text-sm leading-relaxed">
                All third-party integrations and data sharing occur only with explicit user consent and authorization.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Data Retention and Deletion</h2>
              <p className="text-sm leading-relaxed">
                Account information and user data are retained for the duration of the service relationship or as necessary to provide requested services. Users maintain control over their data and may delete content through service interfaces. Data from connected third-party services is retained according to user preferences and service requirements. Users may disconnect third-party services at any time, which may affect data synchronization but will not immediately delete previously synchronized data unless explicitly requested. Users may request complete account and data deletion at any time, subject to legal retention requirements and technical processing timeframes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">User Rights</h2>
              <p className="text-sm leading-relaxed mb-3">
                Subject to applicable law, users may:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4 mb-4">
                <li>Request access to their account information and stored data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of their account and associated data</li>
                <li>Manage connected third-party service integrations</li>
                <li>Revoke authorization for third-party service connections</li>
                <li>Object to certain processing activities</li>
                <li>Request data portability where technically feasible</li>
              </ul>
              <p className="text-sm leading-relaxed">
                Requests should be submitted through our designated contact channels.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">International Transfers</h2>
              <p className="text-sm leading-relaxed">
                Information may be transferred to and processed in jurisdictions other than the user's country of residence. We implement appropriate safeguards to ensure adequate protection during such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Policy Updates</h2>
              <p className="text-sm leading-relaxed">
                This Privacy Policy may be updated periodically. Material changes will be communicated through appropriate channels, including email notification to account holders or prominent notice within our Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Legal Compliance</h2>
              <p className="text-sm leading-relaxed">
                This policy is designed to comply with applicable privacy and data protection laws, including the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p className="text-sm leading-relaxed mb-3">
                For privacy-related inquiries or to exercise your rights under this policy, contact us at:
              </p>
              <p className="text-sm leading-relaxed">
                <strong>Email:</strong> manik@poozle.dev
              </p>
            </section>

            <section className="border-t pt-6 mt-8">
              <p className="text-sm leading-relaxed">
                This Privacy Policy governs the collection and use of information by Poozle Inc. By using our Services, you acknowledge that you have read and understood this policy.
              </p>
            </section>
          </div>
        </Container>
      </ScrollArea>
    </div>
  );
};

export default Privacy;
