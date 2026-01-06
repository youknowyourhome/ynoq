/**
 * @file LivingDocuments.tsx
 * @description Explains why the U.S. founding documents are understood as "living documents"
 * rather than texts fixed in stone, using narrative, timelines, and visuals to support
 * different learning styles.
 */

import { SiteHeader } from '../components/layout/SiteHeader'

/**
 * LivingDocumentsPage describes how the Declaration, Constitution, and Bill of Rights
 * can change in meaning over time through amendments, court decisions, and social movements,
 * and why that matters for who is included in "We the People."
 */
export default function LivingDocumentsPage() {
  /**
   * events models key historical moments that show the founding documents
   * being read and applied in new ways over time.
   */
  const events = [
    {
      era: 'Founding Era',
      years: '1787–1791',
      title: 'Text on the page is written',
      description:
        'The Constitution and Bill of Rights are drafted and ratified. They speak in general terms about liberty, rights, and government power—but many people are left out of political life.',
    },
    {
      era: 'Reconstruction',
      years: '1865–1870',
      title: 'Amendments rewrite who “the people” are',
      description:
        'The 13th, 14th, and 15th Amendments abolish slavery, define citizenship, and protect voting rights for Black men. The text of the Constitution is amended to reach people it once ignored.',
    },
    {
      era: 'Progressive & Suffrage Era',
      years: '1900s–1920',
      title: 'New voters and new powers',
      description:
        'Amendments create the income tax, direct election of senators, and women’s right to vote. The idea that government must answer to more of the people becomes part of the Constitution itself.',
    },
    {
      era: 'Civil Rights Era',
      years: '1950s–1960s',
      title: 'Courts read old words in new ways',
      description:
        'Cases like Brown v. Board of Education and laws like the Civil Rights Act use phrases such as “equal protection” and “due process” to challenge segregation and voter suppression.',
    },
    {
      era: 'Modern Era',
      years: '1970s–today',
      title: 'New issues, same text',
      description:
        'Courts ask how the Fourth Amendment applies to phones and GPS, how the First Amendment applies to social media, and how equality applies to gender, disability, and LGBTQ+ rights.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <SiteHeader />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Understanding the Documents
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            Why the Founding Documents Are Living Documents
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
            The Declaration of Independence, the Constitution, and the Bill of Rights were written
            in the late 1700s. But they still shape people&apos;s lives today. They are often called
            “living documents” because their words are read and applied in new ways as the country
            changes, instead of being treated as frozen in time.
          </p>
        </header>

        {/* Definition section */}
        <section className="mb-10 space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/60 sm:p-6">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            What does “living document” mean?
          </h2>
          <p className="text-sm text-slate-200 sm:text-base">
            A “living document” is a text whose meaning grows as people ask new questions and face
            new problems. The words on the page stay the same, but the way we understand and apply
            them can change. Judges, lawmakers, activists, and everyday people all play a role in
            this ongoing conversation.
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <h3 className="text-sm font-semibold text-slate-50">Fixed text</h3>
              <p className="mt-1 text-xs text-slate-200">
                The original words of the founding documents are preserved, studied, and quoted.
                We do not rewrite them casually.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <h3 className="text-sm font-semibold text-slate-50">Changing country</h3>
              <p className="mt-1 text-xs text-slate-200">
                The United States has changed dramatically in size, technology, and who counts as
                a full member of society.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <h3 className="text-sm font-semibold text-slate-50">New readings</h3>
              <p className="mt-1 text-xs text-slate-200">
                People use the same words—like liberty, equality, and &quot;We the People&quot;—to
                press for new protections and to include those once left out.
              </p>
            </div>
          </div>
        </section>

        {/* Three ways they "live" */}
        <section className="mb-10 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/60 sm:p-6">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Three ways the documents &quot;live&quot; and change
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-xl bg-slate-950/60 p-4 ring-1 ring-slate-800">
              <h3 className="text-sm font-semibold text-slate-50">
                1. Amendments: changing the text
              </h3>
              <p className="mt-2 text-xs text-slate-200">
                The Constitution includes a built-in process for amendment. Amendments have:
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-200">
                <li>• Abolished slavery (13th Amendment).</li>
                <li>• Guaranteed equal protection and birthright citizenship (14th).</li>
                <li>• Expanded voting rights by race, sex, and age (15th, 19th, 26th).</li>
              </ul>
              <p className="mt-2 text-xs text-slate-200">
                These changes directly rewrite the Constitution to include more people in
                &quot;We the People.&quot;
              </p>
            </article>

            <article className="rounded-xl bg-slate-950/60 p-4 ring-1 ring-slate-800">
              <h3 className="text-sm font-semibold text-slate-50">
                2. Interpretation: reading old words in new times
              </h3>
              <p className="mt-2 text-xs text-slate-200">
                Courts interpret phrases like &quot;equal protection,&quot; &quot;cruel and
                unusual,&quot; and &quot;freedom of speech&quot; in real cases:
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-200">
                <li>• Brown v. Board (1954) read equal protection to ban school segregation.</li>
                <li>• Modern cases use the Fourth Amendment for phones and digital data.</li>
                <li>• Free-speech cases protect protests, social media posts, and more.</li>
              </ul>
              <p className="mt-2 text-xs text-slate-200">
                Interpretation lets the same words speak to issues the Framers could not imagine.
              </p>
            </article>

            <article className="rounded-xl bg-slate-950/60 p-4 ring-1 ring-slate-800">
              <h3 className="text-sm font-semibold text-slate-50">
                3. Practice: people making the words real
              </h3>
              <p className="mt-2 text-xs text-slate-200">
                Movements for abolition, civil rights, women&apos;s rights, disability rights,
                LGBTQ+ rights, Indigenous sovereignty, and more have:
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-200">
                <li>• Quoted the founding documents back to the nation.</li>
                <li>• Demanded that promises of liberty and equality apply to them.</li>
                <li>• Pressured lawmakers and courts to change laws and rulings.</li>
              </ul>
              <p className="mt-2 text-xs text-slate-200">
                The documents “live” because people keep arguing about what they require.
              </p>
            </article>
          </div>
        </section>

        {/* Visual timeline for visual learners */}
        <section className="mb-10 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/60 sm:p-6">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Timeline: How the idea of &quot;living&quot; grew over time
          </h2>
          <p className="text-sm text-slate-200 sm:text-base">
            Follow this simplified timeline to see how the same texts have been stretched and
            re-read to cover more people and more situations.
          </p>

          <ol className="mt-4 space-y-4 border-s-s border-slate-800 pl-5 sm:space-y-5 sm:pl-8">
            <span className="absolute -ml-[0.45rem] mt-1 h-3 w-3 rounded-full bg-sky-400 ring-4 ring-slate-950" />
            {events.map((event) => (
              <li key={event.title} className="relative">
                <div className="absolute -left-5 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-slate-700 sm:-left-8" />
                <article className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 shadow-md shadow-slate-950/60 sm:p-5">
                  <header className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky-400">
                        {event.era}
                      </p>
                      <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-xs font-medium text-slate-400">{event.years}</p>
                  </header>
                  <p className="mt-2 text-xs text-slate-200 sm:text-sm">{event.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        {/* Visual comparison: "set in stone" vs "living" + images */}
        <section className="space-y-4 rounded-2xl border border-sky-500/40 bg-gradient-to-r from-sky-500/20 via-slate-900 to-emerald-500/10 p-5 shadow-2xl shadow-sky-900/40 sm:p-6">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Seeing the difference: stone vs. living
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 rounded-2xl bg-slate-950/60 p-4 ring-1 ring-slate-800">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                If they were set in stone...
              </h3>
              <ul className="mt-1 space-y-1 text-xs text-slate-200 sm:text-sm">
                <li>• The original exclusions from voting and office would stay in place.</li>
                <li>• Slavery and segregation could not be challenged using the Constitution.</li>
                <li>• Phones, the internet, and modern policing would fall into a gray area.</li>
              </ul>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                The words would stay locked in the mindset of the 1700s, instead of answering
                today&apos;s questions.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl bg-slate-950/60 p-4 ring-1 ring-slate-800">
              <h3 className="text-sm font-semibold text-emerald-200 sm:text-base">
                Because they are living documents...
              </h3>
              <ul className="mt-1 space-y-1 text-xs text-slate-200 sm:text-sm">
                <li>• Amendments and cases have expanded &quot;We the People&quot; to include more of us.</li>
                <li>• The same phrases now protect free speech, privacy, and equality in new settings.</li>
                <li>• Each generation can argue for a fairer reading of old promises.</li>
              </ul>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                The text does not change every day, but the way we read and apply it can move toward
                greater inclusion and fairness.
              </p>
            </div>
          </div>

          {/* Image strip to support visual learners */}
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <figure className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60">
              <img
                src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/4128e8ee-2910-432e-acf0-1dcfd708386f.jpg"
                className="h-32 w-full object-cover"
                alt="A close-up of aged parchment representing the original written text."
              />
              <figcaption className="px-3 py-2 text-[11px] text-slate-200">
                The words were written long ago on parchment pages.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60">
              <img
                src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/74854901-bbf9-440d-9c99-5100b815bd68.jpg"
                className="h-32 w-full object-cover"
                alt="A crowd of people marching for civil rights."
              />
              <figcaption className="px-3 py-2 text-[11px] text-slate-200">
                People in the streets have pushed the nation to live up to those words.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60">
              <img
                src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/92540092-e20b-49e6-9380-de3e3e6d0b57.jpg"
                className="h-32 w-full object-cover"
                alt="The front of a courthouse with large columns."
              />
              <figcaption className="px-3 py-2 text-[11px] text-slate-200">
                Courts interpret how the old text applies to new cases and new technology.
              </figcaption>
            </figure>
          </div>

          <p className="mt-3 text-xs text-slate-200 sm:text-sm">
            Understanding the documents as living helps us see that we are not only subjects of the
            Constitution—we are also authors of how it is read and applied in our own time.
          </p>
        </section>
      </div>
    </main>
  )
}
