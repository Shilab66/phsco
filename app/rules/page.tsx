"use client"

import { motion } from "framer-motion"

export default function Rules() {
  return (
    <div className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-gold-400 mb-4">Rules & FAQ</h1>
        <p className="text-xl text-gray-300">Competition rules, guidelines, and frequently asked questions.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gold-300">Eligibility and Participation</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            All are welcome to participate in PHSCO contests. Only pre-college students are eligible for prizes and
            recognition.
          </p>
          <p>There is not any fee for participation.</p>
          <p>Only participants registred on time will be able to compete.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gold-300">Contest Format</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            This contest about 15-20 problems to which you will submit solution programs in C++, Java, Python, or a
            related langauge on the HackerRank platform. As long as the HackerRank platform accepts the langauge of your
            choice, it is acceptable for this contest. There are mutliple pathways to advance thru
          </p>
          <p>
            All problem statements are intended to be straightforward, with no intentional "hidden tricks". Problems are
            intended to be challenging, so be sure to allocate the right amount of time and spread your team's resources
            stargtegically.
          </p>
          <p>
            The contest is 3 contiguous hours in length. When you start the contest, your personal timer starts counting
            down, and you will be able to view the contest problems and submit solutions via HackerRank.
          </p>
          <p>
            When you submit a program on HackerRank, it will be run against a number of judging test cases. You will
            receive feedback on whether your solution passes each test case. The platform will show you which test cases
            pass (green checkmarks) and which fail (red X marks).
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gold-300">Contest Conduct and Academic Integrity</h2>
        <div className="space-y-4 text-gray-300">
          <p className="font-semibold text-gold-400">
            PHSCO believes strongly in academic integrity. Participants who violate any of the policies below will be
            disqualified from the competition.
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Work by yourself if competing individually, or only with your registered teammate if competing as a team.
            </li>
            <li>
              Use of generative AI (e.g., services like Copilot, ChatGPT, or similar tools) is STRICTLY PROHIBITED.
            </li>
            <li>
              Consultation about the contest problems with people other than your teammate (if applicable) is
              prohibited.
            </li>
            <li>
              Do not share any technical information or code pertaining to the contest while it is actively running.
            </li>
            <li>
              You may only consult resources that provide information about basic functionality of your programming
              language (e.g., syntax, library functions, input/output, etc.).
            </li>
            <li>Do not use pre-written code or "templates" to get a head start on your coding.</li>
            <li>Do not use multiple HackerRank accounts. Use only the account information provided to you.</li>
            <li>Do not submit any code that behaves in a malicious way towards the grading system.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gold-300">Technical Details</h2>
        <div className="space-y-4 text-gray-300">
          <ul className="space-y-2 list-disc list-inside">
            <li>Programs must compile and run within the time and memory limits specified by HackerRank.</li>
            <li>
              Programs must be deterministic and produce identical answers each time they are run with identical inputs.
            </li>
            <li>Use standard input and output (stdin/stdout) as specified by each problem.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gold-300">Frequently Asked Questions</h2>
        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">What programming languages are supported?</h3>
            <p>
              C, C++, Java, and Python are recommended for competitive programming due to its speed and extensive
              library support. Any other lanaguages are allowed as long as HackerRank supports it.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">How is scoring calculated?</h3>
            <p>Your score for each problem depends on the number of test cases your program solves correctly.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">Can I resubmit solutions?</h3>
            <p>
              Yes, you can resubmit solutions multiple times during the contest. Only your last submission for each
              problem will be considered for final scoring.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">
              What happens if I have technical issues during the contest?
            </h3>
            <p>
              Contact our support team immediately via our{" "}
              <a
                href="https://forms.gle/HdP28HkeoRZyaCVb7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 underline"
              >
                support form
              </a>{" "}
              or{" "}
              <a
                href="https://discord.gg/w8vXRGjQKF"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 underline"
              >
                Discord server
              </a>
              . We will do our best to resolve issues quickly, but time lost due to technical problems will not be
              compensated.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">Are there prizes for winners?</h3>
            <p>
              Yes! Prizes will be awarded to top performers in both individual and team categories. Prize details will
              be announced closer to the competition date.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">Is AI allowed?</h3>
            <p>
              The use of any AI is stricktly prohibited. Any suspected use of AI will lead to imediate
              disqualifification.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gold-300">Platform Information</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            <strong>Platform:</strong> HackerRank
          </p>
          <p>
            <strong>Access:</strong> Contest links and login credentials will be provided via email before the
            competition.
          </p>
          <p>
            <strong>Practice:</strong> We recommend familiarizing yourself with the HackerRank interface before the
            contest by solving practice problems on their platform.
          </p>
          <p>
            <strong>Support:</strong> For questions about contest rules or technical issues, use our{" "}
            <a
              href="https://forms.gle/HdP28HkeoRZyaCVb7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 underline"
            >
              support form
            </a>{" "}
            or join our{" "}
            <a
              href="https://discord.gg/w8vXRGjQKF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 underline"
            >
              Discord server
            </a>
            .
          </p>
        </div>
      </motion.div>
    </div>
  )
}
