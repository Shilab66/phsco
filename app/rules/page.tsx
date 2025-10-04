"use client"

import { motion } from "framer-motion"

export default function Rules() {
  return (
    <div className="space-y-6">
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
            All are welcome to participate in PHSCO contests; however, only pre-college students are eligible for division-based placement prizes.
            A separate prize is given to the top participant across all contestants, if applicable to the contest.
          </p>
          <p>There is <span className="text-gold-400 font-bold">no fee</span> for participation.</p>
          <p>You can choose to participate <span className="text-gold-400 font-bold">alone</span> or <span className="text-gold-400 font-bold">with a partner</span>.
          If you win as a team, prize money will be <span className="text-gold-400 font-bold">split</span> between both competitors in the team.
          </p>
          <p>Only participants registered on time will be able to compete.</p>
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
            The contest will contain roughly <span className="text-gold-400 font-bold">10-15 programming problems</span> to solve in
            <span className="text-gold-400 font-bold"> 4 hours</span>. Each problem will present a unique task, and your team 
            will need to design and implement a code algorithm to solve the problem. Sample inputs and outputs are provided 
            for each problem to assist with debugging. Solution programs can be written in any program supported by Codeforces.
          </p>
          <p>
            When you submit a program on Codeforces, it will automatically be run against a number of test cases, which must all be passed
            to receive credit. No information on the status of hidden test cases will be provided besides the verdict received by your program
            (Accepted, Wrong Answer, Time Limit Exceeded, etc.).
          </p>
          <p>
            Final standings will be calculated using an <span className="text-gold-400 font-bold">ICPC-style leaderboard</span>, with a 20-minute penalty for incorrect submissions (including resubmission after a correct answer).
            Rankings are based on the number of problems solved, with ties broken by the team's total time penalty (sum of elapsed times until first correct submission per problem, plus penalties for incorrect submissions).
            No time penalty is applied to unsolved problems. The leaderboard will be <span className="text-gold-400 font-bold">frozen 1 hour prior</span> to the end of the contest.
          </p>
          <p>
            All problem statements are intended to be straightforward, with no intentional "hidden tricks". If you have a question
            regarding the wording of a problem during the competition, fill out a support form and the organizers will respond
            as quickly as possible (note, however, that you may not get more than a "read carefully" response). In the event that
            a problem statement needs correction, all competitors will be notified via a Discord announcement and through
            the Codeforces notification system.
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
          <p>
            <em>The following rules are more or less the same as the standard rules for rated Codeforces rounds.</em>
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Work by yourself if competing individually, or only with your registered teammate if competing as a team.
            </li>
            <li>
              Use of generative AI (e.g., services like Copilot, ChatGPT, or similar tools) is <span className="text-gold-400 font-bold">STRICTLY PROHIBITED</span>.
            </li>
            <li>
              Consultation about the contest problems with people other than your teammate (if applicable) is
              prohibited.
            </li>
            <li>
              Do not share any technical information or code pertaining to the contest while it is actively running.
            </li>
            <li>
              You may consult resources on the internet, but you may not actively post questions on a forum-style website. If you use or copy
              code from a public source on the internet, please, credit it in the comments!
            </li>
            <li>
              Do not submit code that was not written by you. Plagiarism checks will be run at the end of the contest.
            </li>
            <li>Do not use multiple Codeforces accounts.</li>
            <li>Do not participate in a contest that does not match the division you signed up for. If you accidentally submit for the wrong division, contact support.</li>
            <li>Do not submit any code that behaves in a malicious way towards the grading system.</li>
            <li>Do not intentionally sign up for a lower division than your team's skill level to boost your placement.</li>
            <li>These rules are not comprehensive and the usage of any loopholes in rules are frowned upon. Please, don't ruin the fun for yourself or for anyone else!</li>
            <li>Generally, any decision of the judges is final.</li>
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
            <li>Programs must compile and run within the time and memory limits specified by Codeforces.</li>
            <li>
              Any languages supported by Codeforces are allowed for submission. Note, however, that problems are only guaranteed to be solvable in C++, Java 21, and Python 3.
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
            <h3 className="text-lg font-semibold text-gold-400 mb-2">What division should I join?</h3>
            <p>
              Try to join the division where you will learn the most! If you are taking courses like APCSA or APCSP, or this
              is your first-ever programming competition, the Standard Division is a great introduction to competitive programming.
              If you are very comfortable with programming (i.e. FRC, game dev, outside projects) and/or have competition experience (ACSL Senior, USACO Silver+),
              the Advanced Division is probably more suitable for you.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">What resources can I use?</h3>
            <p>
              You are allowed to consult reference books and materials, such as language documentation and websites like w3schools.
              Pasting large code snippets from publicly available online sources is allowed, but please credit the source if you do so!
              Additionally, you are not allowed to consult online forums such as StackOverflow and/or post questions regarding the competition while it is running.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">Is AI allowed?</h3>
            <p>
              <span className="text-gold-400 font-bold">No.</span> Using an AI during a programming competition is no different than 
              using a chess engine during an online chess tournament - it's morally wrong, you won't learn anything, and it ruins the
              fun for everyone. Any suspected use of AI will lead to immediate disqualification and potentially being blacklisted from future events.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">What programming languages/libraries are supported?</h3>
            <p>
              All problems are tested with C++, Java, and Python solutions. Only inbuilt libraries are supported; i.e. math for Python and bits/stdcpp.h for C++.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">My program passes every test case except for one. Can I get partial credit?</h3>
            <p>Unless otherwise stated, your program must pass all test cases to receive credit for that problem.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">
              What happens if I have technical issues during the contest?
            </h3>
            <p>
              Contact our support team immediately via our{" "}
              <a
                href="https://forms.gle/PJC1RCrydq4DFjmu6"
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
              . We will do our best to resolve issues quickly, but time lost due to personal technical problems will not be
              compensated.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">Are there prizes for winners?</h3>
            <p>
              Yes! Prizes will be awarded to top-performing teams in both divisions. Prize details will
              be announced closer to the competition date.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gold-400 mb-2">What can I do to prepare?</h3>
            <p>
              Online resources such as <a
                href="https://usaco.guide/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 underline"
              >
                the USACO Guide
              </a>{" "}
              are an excellent way to learn about the algorithms and structures used in programming competitions.
              Additionally, you can view a list of problems used in past PHSCO contests <a
                href="/archive"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 underline"
              >
                here.
              </a>{" "}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
