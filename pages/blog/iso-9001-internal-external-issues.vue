<template>
  <div class="min-h-screen bg-white">
    <header class="sticky top-0 bg-white border-b border-gray-100 z-50">
      <div class="container mx-auto flex items-center justify-between px-6 py-4">
        <NuxtLink to="/" class="flex items-center cursor-pointer">
          <img src="/4es-logo.png" alt="4ES Hub" class="h-14" />
        </NuxtLink>
        <a
          href="https://app.4eshub.com"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg px-6 py-2.5 transition-all duration-200"
        >
          Try free
        </a>
      </div>
    </header>

    <main>
      <article itemscope itemtype="https://schema.org/BlogPosting">
        <meta itemprop="headline" :content="headline" />
        <meta itemprop="description" :content="description" />
        <meta itemprop="datePublished" content="2026-08-17" />
        <meta itemprop="dateModified" content="2026-08-17" />
        <section class="bg-gradient-to-br from-primary-50 via-white to-white py-20">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl mx-auto">
              <NuxtLink
                to="/blog"
                class="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold mb-8"
              >
                <i class="fa-solid fa-arrow-left mr-2"></i>
                Back to blog
              </NuxtLink>
              <div class="flex flex-wrap items-center gap-3 mb-6">
                <span
                  class="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold"
                >
                  ISO 9001
                </span>
                <span class="text-sm text-gray-500">12 min read</span>
                <time
                  class="text-sm text-gray-500"
                  datetime="2026-08-17"
                  itemprop="datePublished"
                >
                  August 17, 2026
                </time>
              </div>
              <h1
                class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
                itemprop="headline"
              >
                ISO 9001 internal and external issues: how to satisfy Clause 4.1
                before the auditor asks
              </h1>
              <p class="text-xl text-gray-600 leading-relaxed">
                Certification is three weeks away. Processes are documented,
                staff are trained, records look complete—then the auditor says:
                “Walk me through how you identified your internal and external
                issues.” Silence is one of the most common audit gaps. Here is
                how to close it.
              </p>
            </div>
          </div>
        </section>

        <section class="py-16">
          <div class="container mx-auto px-6">
            <div class="max-w-3xl mx-auto prose-content" itemprop="articleBody">
              <section
                id="key-takeaway"
                class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mb-10"
              >
                <p
                  class="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-semibold mb-4"
                >
                  Key takeaway
                </p>
                <h2 class="mt-0 text-2xl">
                  Clause 4.1 is the foundation, not a tick-box
                </h2>
                <p class="mb-0">
                  ISO 9001 Clause 4.1 requires you to determine the internal and
                  external issues that affect your quality management system.
                  Auditors do not need a specific template. They need evidence
                  that you identified relevant factors, keep them current, and
                  feed them into risk planning and quality objectives. Since
                  February 2024, that analysis must also include an explicit
                  decision on whether climate change is relevant.
                </p>
              </section>

              <nav
                aria-label="Article contents"
                class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10"
              >
                <p class="text-sm font-semibold text-gray-900 mb-3">On this page</p>
                <ul class="text-sm text-gray-600 space-y-2 list-none pl-0 mb-0">
                  <li>
                    <a href="#what-iso-says" class="text-primary-600 hover:text-primary-700">
                      What ISO 9001 says about issues
                    </a>
                  </li>
                  <li>
                    <a href="#internal-issues" class="text-primary-600 hover:text-primary-700">
                      Internal issues and examples
                    </a>
                  </li>
                  <li>
                    <a href="#external-issues" class="text-primary-600 hover:text-primary-700">
                      External issues and examples
                    </a>
                  </li>
                  <li>
                    <a href="#how-to-document" class="text-primary-600 hover:text-primary-700">
                      How to identify and document them
                    </a>
                  </li>
                  <li>
                    <a href="#risk-connection" class="text-primary-600 hover:text-primary-700">
                      How issues connect to risk
                    </a>
                  </li>
                  <li>
                    <a href="#mistakes" class="text-primary-600 hover:text-primary-700">
                      Common Clause 4.1 mistakes
                    </a>
                  </li>
                  <li>
                    <a href="#4es-hub" class="text-primary-600 hover:text-primary-700">
                      How 4ES Hub supports Clause 4.1
                    </a>
                  </li>
                  <li>
                    <a href="#faq" class="text-primary-600 hover:text-primary-700">
                      Frequently asked questions
                    </a>
                  </li>
                </ul>
              </nav>

              <h2 id="what-iso-says">What does ISO 9001 say about internal and external issues?</h2>
              <p>
                Clause 4.1 sits at the start of the standard for a reason. ISO
                requires your organization to determine the external and internal
                issues that affect its purpose and its ability to achieve the
                intended results of the QMS. Without a current picture of those
                factors, processes, objectives, and risk controls are built on
                guesswork.
              </p>
              <p>
                The clause does not prescribe a method. You do not have to use
                SWOT, PESTLE, or a particular register format. What you do need
                is evidence that the analysis happened, that it is relevant to
                your business, and that the findings feed QMS planning. An
                <NuxtLink to="/iso-9001-checklist" class="text-primary-600 hover:text-primary-700 font-medium">ISO 9001 checklist</NuxtLink>
                helps you place this work in the rest of your documentation plan.
              </p>
              <p>
                That planning link is not optional in practice. Clause 4.1 is
                the input to Clause 6.1, which requires actions to address risks
                and opportunities. You cannot treat risk seriously if you have
                not first understood the context that creates those risks. Our
                <NuxtLink to="/blog/iso-9001-certification-from-zero-to-certified" class="text-primary-600 hover:text-primary-700 font-medium">zero-to-certified guide</NuxtLink>
                covers the full sequence from context through audit-ready
                evidence.
              </p>
              <p>
                In February 2024, ISO published Amendment 1:2024 to ISO
                9001:2015. It added one explicit requirement to Clause 4.1: the
                organization shall determine whether climate change is a relevant
                issue. If your supply chain depends on weather-sensitive regions,
                or customers impose sustainability requirements, climate change
                belongs in the analysis. Even if you conclude it is not relevant,
                that decision must be made and demonstrated.
              </p>

              <h2 id="internal-issues">What are internal issues in ISO 9001?</h2>
              <p>
                Internal issues are factors inside your organization that affect
                your ability to meet QMS objectives. You usually control them, or
                at least you can influence them more directly than market or
                regulatory forces.
              </p>
              <p>
                ISO 9001:2015 typically groups internal context around people,
                processes, infrastructure, and culture. Financial performance and
                governance are common additions in practice. A simple test keeps
                the list honest: does the factor come from inside the business,
                and does it affect quality outcomes? If both answers are yes, it
                belongs in your Clause 4.1 analysis.
              </p>

              <h3>People and competence</h3>
              <p>
                Staff-related issues are among the factors organizations skip
                most often. High turnover in production or customer-facing roles
                creates inconsistency. Skills gaps grow when products change
                faster than training. When too few experienced people hold the
                process knowledge, one resignation can disrupt an entire line.
              </p>
              <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>Training records that are inconsistent across departments</li>
                <li>Over-reliance on a small number of experienced staff</li>
                <li>Competence that is not retrained when procedures change</li>
              </ul>

              <h3>Processes and procedures</h3>
              <p>
                Many organizations have processes that exist on paper but not in
                practice. Missing or outdated SOPs, and workflows that were never
                updated after a software change, are two of the gaps auditors
                flag most often.
              </p>
              <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>Work carried out differently across shifts or locations</li>
                <li>No clear handoff points between departments</li>
                <li>Procedures that no longer match how the work is done</li>
              </ul>

              <h3>Infrastructure and technology</h3>
              <p>
                Aging equipment with no maintenance schedule is a direct quality
                risk. So is software that does not connect to current operations.
                Facilities that cannot meet cleanliness or capacity requirements
                belong on the list as well.
              </p>

              <h3>Financial and resource factors</h3>
              <p>
                Budget limits that block training or equipment upgrades affect
                output quality. Not enough staff to meet demand without errors is
                a resource issue, not only an operations one. Delayed investment
                in key machinery is the same class of problem.
              </p>

              <h3>Culture and leadership</h3>
              <p>
                Culture is harder to document than a machine age or a skills
                matrix, but it still belongs in context. Leaders who do not
                visibly support the QMS set the tone for everyone else. A blame
                culture stops people from reporting problems early, so issues
                surface only when they are expensive to fix. Low engagement with
                quality goals and poor communication between departments are
                internal issues, not “soft” extras.
              </p>

              <h3>Historical performance</h3>
              <p>
                Your own audit history is one of the clearest sources of internal
                issues. Repeat nonconformities, customer complaints concentrated
                on specific product lines, and high rework or scrap that never
                triggered a process review are all signals for Clause 4.1. If
                those findings never make it into context analysis, your risk
                register will keep treating symptoms instead of causes.
              </p>

              <h2 id="external-issues">What are external issues in ISO 9001?</h2>
              <p>
                External issues are factors outside your organization that affect
                QMS performance or your ability to meet customer and regulatory
                requirements. You do not control them. You still have to watch
                them and respond.
              </p>
              <p>
                ISO 9001:2015 points to legal and regulatory requirements, market
                conditions, technology shifts, competition, economic conditions,
                and social or cultural factors. PESTLE—political, economic,
                social, technological, legal, and environmental—is a widely used
                structure for this work. The American Society for Quality notes
                that ISO 9001:2015 was designed to integrate with business
                activities; PESTLE is one of the tools practitioners use to
                structure external context. SWOT is often used alongside it so
                internal and external factors sit in one picture.
              </p>
              <p>
                Relevance is the filter. An external factor belongs in your
                analysis when it can affect quality objectives, product or
                service delivery, or customer satisfaction. A regulation that
                changes how you manufacture or label a product is relevant. A
                competitor that trains customers to expect faster delivery is
                also relevant. Since February 2024, you must also decide whether
                climate change is a relevant external issue and be able to show
                that decision.
              </p>

              <h3>Regulatory and legal</h3>
              <p>
                Regulations change, and the QMS has to keep up. Safety marking
                updates such as FDA or CE requirements can affect labeling,
                design, and supplier controls overnight. Export rules can disrupt
                the supply chain. Climate-related regulations now sit in this
                category as well, following Amendment 1:2024.
              </p>

              <h3>Economic factors</h3>
              <p>
                Unstable raw-material prices, inflation in subcontracted
                services, and currency swings in international supply chains all
                pressure quality if processes cannot flex without dropping
                standards. When customers cut budgets or change specifications,
                your controls still have to hold.
              </p>

              <h3>Market and competitive factors</h3>
              <p>
                When competitors introduce new technology, customer expectations
                shift even if you have changed nothing. Demand for certified or
                more sustainable products is a market issue your QMS needs to
                account for. New players offering lower prices on standard
                products can also change what “acceptable quality” means in
                practice.
              </p>

              <h3>Technology and innovation</h3>
              <p>
                Automation can make existing processes less competitive.
                Customers increasingly expect digital order management.
                Cybersecurity requirements now affect how quality records are
                stored and protected—an issue many teams still treat as IT rather
                than QMS. New testing or measurement technologies becoming the
                industry norm belong here too.
              </p>

              <h3>Social, cultural, and environmental</h3>
              <p>
                Demographic shifts change your recruitment pool and available
                skills. Remote work changes how teams stay consistent across
                sites and shifts. Customers want more supply-chain transparency
                and clearer corporate responsibility. Weather disruptions to
                logistics, natural disasters affecting facilities or suppliers,
                and geographic concentration of key customers are now documented
                Clause 4.1 considerations after the 2024 climate change
                amendment.
              </p>

              <h2 id="how-to-document">How to identify and document internal and external issues</h2>
              <p>
                Knowing the issues is only half the job. ISO 9001 expects
                evidence that you identified them and that the findings feed QMS
                planning. This is the sequence that holds up in an audit.
              </p>

              <h3>Step 1. Bring in the right people</h3>
              <p>
                Do not let one quality manager complete this exercise alone.
                Operations, HR, finance, sales, and quality each see different
                issues. The combined view is more accurate and easier to defend
                when an auditor asks how you identified them. The ISO 9001
                Auditing Practices Group has long emphasized that
                cross-functional input is essential, because finance, HR,
                commercial, and engineering each bring expertise a single
                function cannot cover.
              </p>
              <p>
                If you are a smaller organization, you do not need a long
                report. A one-page table of relevant issues, their category, and
                their link to quality objectives is enough. Scale the method to
                your size—see
                <NuxtLink to="/blog/should-i-get-iso-9001" class="text-primary-600 hover:text-primary-700 font-medium">whether ISO 9001 is the right next step</NuxtLink>
                if you are still deciding how formal the system should be.
              </p>

              <h3>Step 2. Use a structured approach</h3>
              <p>
                SWOT and PESTLE are the two most common tools. SWOT covers
                internal strengths and weaknesses plus external opportunities and
                threats. PESTLE structures external analysis across six
                categories. Either method works for auditors. What matters is
                that you use it regularly and update it when the business
                changes.
              </p>

              <h3>Step 3. Write down what you find</h3>
              <p>
                Record findings in a version-controlled place you can open during
                an audit. A simple table works: issue, category (internal or
                external), relevance to the QMS, and planned response.
              </p>
              <p>
                One clarification is worth knowing: Clause 4.1 does not require
                documented information as a formal “shall retain” requirement.
                ISO’s technical committee FAQ states that Clauses 4.1 and 4.2
                across management system standards do not require documented
                information, because the output is knowledge used as input to
                the design of the system. Auditors will still ask you to
                demonstrate compliance through interviews, SWOT outputs, or
                management review minutes. In practice, a living context register
                makes that demonstration far easier than reconstructing the
                conversation from memory.
              </p>

              <h3>Step 4. Connect issues to risks and objectives</h3>
              <p>
                Each issue should link to a risk, an opportunity, or a QMS
                objective. If an issue has no connection to any of these,
                question whether it is relevant. Auditors look most closely at
                the trail from context analysis into risk planning. That is the
                difference between a list in a folder and a working Clause 4.1
                process.
              </p>

              <h3>Step 5. Review it regularly</h3>
              <p>
                Clause 4.1 does not set a review frequency. Most organizations
                review context at the annual management review required under
                Clause 9.3. You should also trigger a review when something
                significant changes: a new regulation, a key customer shift, a
                leadership change, or a major internal restructuring. If the list
                has not changed in three years, auditors will question whether
                you are actually monitoring context.
              </p>

              <h2 id="risk-connection">How internal and external issues connect to risk management</h2>
              <p>
                This is where Clause 4.1 stops being paperwork and starts being
                useful. Every issue you identify is a potential risk or
                opportunity. A skills gap puts product quality at risk. A new
                regulation puts compliance at risk. A competitor losing ground is
                an opportunity. New automation can be both, depending on who
                moves first.
              </p>
              <p>
                Clause 6.1 requires you to plan actions to address those risks
                and opportunities. Without a thorough 4.1 analysis, the risk
                register has blind spots. In practice, map each issue to a risk
                or opportunity entry, assign an owner, agree a response, and set
                a review date. That is the trail auditors follow during
                surveillance: from context analysis into the risk register. Our
                <NuxtLink to="/blog/enterprise-risk-management-software" class="text-primary-600 hover:text-primary-700 font-medium">enterprise risk management guide</NuxtLink>
                covers how to keep that trail connected in software instead of
                spreadsheets.
              </p>

              <h2 id="mistakes">Common Clause 4.1 mistakes—and how to avoid them</h2>

              <h3>Treating it as a one-time exercise</h3>
              <p>
                Many organizations complete the analysis for initial
                certification and never touch it again. ISO 9001 expects context
                to be a living part of the QMS. An unchanged list is a finding
                waiting to happen, and repeat findings add cost through extra
                consultancy, re-assessment, and delayed certification.
              </p>

              <h3>Listing issues with no link to the QMS</h3>
              <p>
                A bullet list that sits in a folder and connects to nothing fails
                the intent of Clause 4.1. Each issue must connect visibly to
                planning, risk assessment, or objectives. Relevancy is what
                auditors test.
              </p>

              <h3>Mixing up issues and risks</h3>
              <p>
                An issue is a factor in your context. A risk is the potential
                consequence of that issue on the QMS. Auditors sometimes find
                registers that contain only risks, with no underlying issues to
                support them. Keep the two distinct, then link them.
              </p>

              <h3>Leaving out internal cultural factors</h3>
              <p>
                Process and infrastructure issues are easy to write down.
                Leadership alignment, staff engagement, and communication gaps
                are often skipped. They still affect QMS outcomes. Cross-functional
                input is the practical fix: when the auditor asks how you
                identified issues, people across the business can speak to the
                process because they were part of it.
              </p>

              <h3>Copying a generic template without adapting it</h3>
              <p>
                A template is a starting point. An industry-generic list that
                does not reflect your customers, markets, and workforce is
                something auditors spot quickly. The analysis should look like
                your organization, not a downloaded example.
              </p>

              <h3>Missing the 2024 climate change requirement</h3>
              <p>
                If your Clause 4.1 analysis was last reviewed before February
                2024 and does not address whether climate change is relevant, it
                is incomplete. Record the decision even when the answer is no.
              </p>

              <h2 id="4es-hub">How 4ES Hub supports Clause 4.1</h2>
              <p>
                4ES Hub treats internal and external issues as part of context of
                the organization—not a side spreadsheet. You record each issue
                with a type (internal or external by default), an optional
                context origin such as people, legal, market, or environmental,
                and a status so the register stays current.
              </p>
              <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-600">
                <li>
                  Keep a living issues register instead of a static SWOT file
                  that only appears at certification
                </li>
                <li>
                  Link each issue to a risk assessment or an opportunity for
                  improvement so Clause 6.1 has a visible source
                </li>
                <li>
                  Set review frequency on issue types and run scheduled reviews
                  so context is re-checked, not assumed
                </li>
                <li>
                  Scope issues to the teams they affect, then show auditors how
                  the analysis was done and who owns the follow-up
                </li>
              </ul>
              <p>
                That is the difference between answering “we have a list” and
                walking the auditor from an identified issue to the risk, the
                action, and the last review date. If you are still choosing
                software,
                <NuxtLink to="/blog/how-to-choose-eqms-software" class="text-primary-600 hover:text-primary-700 font-medium">how to choose eQMS software</NuxtLink>
                is a practical next read before you start the context work.
              </p>
              <p>
                According to the ISO Survey 2024, published by ISO with the
                International Accreditation Forum, ISO 9001 reached 1,474,118
                certificates globally as of 31 December 2024. The organizations
                that keep those certificates are the ones that treat Clause 4.1
                as operating input—not a folder that comes out when an auditor
                visits.
              </p>

              <h2 id="faq">Frequently asked questions</h2>
              <div class="space-y-8">
                <div v-for="item in faqItems" :key="item.question">
                  <h3 class="text-xl font-bold text-gray-900 mb-2">
                    {{ item.question }}
                  </h3>
                  <p class="mb-0">{{ item.answer }}</p>
                </div>
              </div>

              <aside class="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-10">
                <p class="text-sm font-semibold text-gray-900 mb-3">
                  Related reading
                </p>
                <ul class="text-sm space-y-2 list-none pl-0 mb-0">
                  <li>
                    <NuxtLink
                      to="/blog/what-is-iso-9001"
                      class="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      What is ISO 9001?
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/iso-9001-explained"
                      class="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      ISO 9001 explained
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/blog/enterprise-risk-management-software"
                      class="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Enterprise risk management software
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/blog/iso-9001-certification-from-zero-to-certified"
                      class="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      From zero to ISO 9001 certification
                    </NuxtLink>
                  </li>
                </ul>
              </aside>

              <div class="bg-primary-50 border border-primary-100 rounded-2xl p-8 mt-10">
                <h2 class="mt-0">Keep Clause 4.1 connected to the rest of your QMS</h2>
                <p>
                  See how 4ES Hub turns internal and external issues into a
                  living register—linked to risks, opportunities, reviews, and
                  audit-ready evidence.
                </p>
                <a
                  href="https://app.4eshub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 mt-2"
                >
                  Try free — start now
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script setup>
const headline =
  "ISO 9001 internal and external issues: how to satisfy Clause 4.1 before the auditor asks";
const description =
  "ISO 9001 Clause 4.1 requires you to identify internal and external issues that affect your QMS. Get examples, a documentation method, the 2024 climate change amendment, and how 4ES Hub keeps context analysis audit-ready.";

const { faqItems } = useBlogArticleSeo({
  slug: "iso-9001-internal-external-issues",
  headline,
  title:
    "ISO 9001 Internal and External Issues (Clause 4.1): Examples & How to Document Them",
  description,
  keywords: [
    "ISO 9001 internal and external issues",
    "ISO 9001 Clause 4.1",
    "context of the organization ISO 9001",
    "internal issues ISO 9001",
    "external issues ISO 9001",
    "ISO 9001 climate change amendment",
    "PESTLE ISO 9001",
    "SWOT ISO 9001",
    "4ES Hub",
  ],
  published: "2026-08-17",
  section: "ISO 9001",
  tags: [
    "ISO 9001",
    "Clause 4.1",
    "context of the organization",
    "internal issues",
    "external issues",
    "risk-based thinking",
  ],
  about: [
    "ISO 9001",
    "Clause 4.1",
    "context of the organization",
    "quality management system",
    "internal and external issues",
  ],
  breadcrumbLabel: "ISO 9001 internal and external issues",
  faqItems: [
    {
      question:
        "What is the difference between internal and external issues in ISO 9001?",
      answer:
        "Internal issues come from inside the business—competence, process gaps, equipment condition, resources, and leadership culture. External issues are factors you do not control, such as regulations, markets, economic conditions, and new technology. Clause 4.1 requires you to consider both because they affect QMS effectiveness.",
    },
    {
      question: "Does ISO 9001 require a specific template for documenting issues?",
      answer:
        "No. ISO 9001 does not require a particular format. You need evidence that the analysis was done and that the outputs connect to QMS planning. Common formats include SWOT tables, PESTLE matrices, and a context register. Substance and the trail into risk planning matter more than the template.",
    },
    {
      question: "How often should we review our internal and external issues?",
      answer:
        "Most organizations review context analysis at the annual management review required under Clause 9.3. You should also trigger a review after significant change: a new market, a major regulatory shift, a leadership change, or a supply-chain disruption that affects quality delivery.",
    },
    {
      question: "Can a small business meet Clause 4.1 without a formal analysis?",
      answer:
        "Yes. ISO 9001 scales to the size of the organization. A small business does not need a lengthy report. A one-page table listing relevant issues, their category, and their link to quality objectives is enough if people can explain how they arrived at it.",
    },
    {
      question:
        "What happens if an auditor finds our Clause 4.1 analysis is incomplete?",
      answer:
        "The auditor may raise a nonconformity or an observation, depending on severity. Incomplete or outdated issues often show up as a minor nonconformity. Update the analysis and show how it connects to QMS planning. Gaps that keep appearing across audits can escalate to a major nonconformity.",
    },
    {
      question: "Does ISO 9001 require us to consider climate change?",
      answer:
        "Yes. Amendment 1:2024, effective February 2024, added a requirement that the organization shall determine whether climate change is a relevant issue. You must make and be able to demonstrate that decision even if you conclude it is not relevant.",
    },
    {
      question: "How does 4ES Hub help with ISO 9001 Clause 4.1?",
      answer:
        "4ES Hub keeps internal and external issues in a living register under context of the organization. You classify issues, attach context origins, review them on a schedule, and link each one to a risk assessment or opportunity for improvement so auditors can trace Clause 4.1 into Clause 6.1.",
    },
  ],
});
</script>

<style scoped>
.prose-content {
  color: #4b5563;
  font-size: 1.125rem;
  line-height: 1.8;
}
.prose-content h2 {
  color: #111827;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}
.prose-content h3 {
  color: #111827;
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
}
.prose-content p {
  margin-bottom: 1.5rem;
}
.prose-content nav a {
  text-decoration: none;
}
.prose-content nav a:hover {
  text-decoration: underline;
}
</style>
