import Dock, { type DockItemData } from "./components/Dock";
import BubbleMenu, { type BubbleMenuProps } from "./components/BubbleMenu";
import { HeroHighlight, Highlight } from "./components/HeroHighlight";
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card";
import DotGrid from "./components/DotGrid";
import Threads from "./components/Threads";
import { Home, BookOpen, Users, Award, Mail, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

function App() {
  const dockItems: DockItemData[] = [
    {
      icon: <Home className="w-6 h-6 text-[#02ccfe]" />,
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#02ccfe]" />,
      label: "Programs",
      onClick: () =>
        document
          .querySelector(".programs-section")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <Users className="w-6 h-6 text-[#02ccfe]" />,
      label: "Testimonials",
      onClick: () =>
        document
          .querySelector(".testimonials-section")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#02ccfe]" />,
      label: "About",
      onClick: () =>
        document
          .querySelector(".about-section")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <Award className="w-6 h-6 text-[#02ccfe]" />,
      label: "Benefits",
      onClick: () =>
        document
          .querySelector(".benefits-section")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <Mail className="w-6 h-6 text-[#02ccfe]" />,
      label: "Apply",
      onClick: () =>
        document
          .getElementById("registration")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  const testimonials = [
    {
      name: "Chukwuemeka O.",
      text: "The structured approach helped me understand trading beyond just buying and selling. I now think systematically about risk and opportunity.",
      role: "Previous Trainee",
    },
    {
      name: "Aisha M.",
      text: "I came in with no tech background. The AI Media training gave me practical skills I use daily in my business.",
      role: "Previous Trainee",
    },
    {
      name: "Oluwaseun A.",
      text: "The hands-on approach made all the difference. I learned by doing, not just watching.",
      role: "Previous Trainee",
    },
  ];

  const benefits = [
    "Clear understanding of financial and digital systems",
    "Practical skills applicable in today's economy",
    "Improved decision-making and discipline",
    "Structured learning environment",
    "Long-term mindset for growth and sustainability",
    "Confidence built on knowledge, not assumptions",
  ];

  const bubbleMenuItems: BubbleMenuProps["items"] = [
    {
      label: "home",
      href: "#",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#02ccfe", textColor: "#ffffff" },
    },
    {
      label: "programs",
      href: "#programs",
      ariaLabel: "Programs",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "testimonials",
      href: "#testimonials",
      ariaLabel: "Testimonials",
      rotation: -8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
    {
      label: "about",
      href: "#about",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    },
    {
      label: "apply",
      href: "#registration",
      ariaLabel: "Apply",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-950">
      {/* Fixed Logo - Hidden on mobile when BubbleMenu is visible */}
      <div className="hidden md:block fixed top-6 left-6 z-50">
        <div
          className="w-16 h-16 rounded-full border-2 border-[#02ccfe] bg-gray-900/80 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(2,204,254,0.5)]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/favicon-32x32.png"
            alt="Peach Tech Group"
            className="w-8 h-8"
          />
        </div>
      </div>

      {/* BubbleMenu - Mobile only */}
      <div className="md:hidden">
        <BubbleMenu
          logo={
            <div
              className="w-16 h-16 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(2,204,254,0.5)]"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="/favicon-32x32.png"
                alt="Peach Tech Group"
                className="w-8 h-8"
              />
            </div>
          }
          items={bubbleMenuItems}
          menuBg="#1f2937"
          menuContentColor="#02ccfe"
          useFixedPosition={true}
        />
      </div>

      {/* Floating Dock - Desktop only */}
      <div className="hidden md:block">
        <Dock items={dockItems} />
      </div>

      {/* Section 1: Header & Introductory Video */}
      <section
        className="relative text-center py-24 px-8 bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dflgx1b4p/image/upload/v1770181131/peach_bg_bezvtu.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-[#02ccfe]/30 via-gray-900/90 to-gray-950/95"></div>

        {/* Content with HeroHighlight */}
        <HeroHighlight containerClassName="w-full">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative z-10"
          >
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Highlight className="text-white">Financial Freedom</Highlight>{" "}
              <span className="text-white">Is a</span>{" "}
              <Highlight className="text-white">Skill.</Highlight>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
            >
              And like every skill, it can be{" "}
              <span className="text-[#02ccfe] font-semibold">learned</span>,{" "}
              <span className="text-[#02ccfe] font-semibold">developed</span>,
              and <span className="text-[#02ccfe] font-semibold">applied</span>{" "}
              with the right structure.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              We are building systems designed to meet you at the point of your
              need — and guide you toward clarity, discipline, and growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="max-w-3xl mx-auto my-12"
            >
              <video
                className="w-full aspect-video rounded-xl border-2 border-[#02ccfe] shadow-2xl"
                controls
                poster="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
              >
                <source
                  src="https://res.cloudinary.com/dflgx1b4p/video/upload/v1770119498/peacch-1_nmdzmd.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              href="#registration"
              className="inline-block px-10 py-4 text-lg font-semibold bg-[#02ccfe] text-black rounded-lg transition-all duration-300 hover:bg-[#00b8e6] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(2,204,254,0.3)]"
            >
              Begin the Journey
            </motion.a>
          </motion.div>
        </HeroHighlight>
      </section>

      {/* Section 2: The 2 Arms of the Training Program */}
      <section
        id="programs"
        className="programs-section py-20 px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          The 2 Arms of the Training Program
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {[
            {
              title: "Peach Trading Floor",
              description:
                "A structured environment focused on understanding financial markets, discipline, risk management, and decision-making.",
              points: [
                "Think like a trader",
                "Operate with structure",
                "Build consistency over emotion",
              ],
            },
            {
              title: "Peach AI Media",
              description:
                "A modern skill department focused on digital tools, AI systems, and technology-driven solutions for growth and relevance.",
              points: [
                "Understand today's digital economy",
                "Leverage technology for efficiency",
                "Build skills that remain valuable",
              ],
            },
          ].map((program, idx) => (
            <CardContainer
              key={idx}
              className="w-full"
              containerClassName="py-0"
            >
              <CardBody className="border border-[#02ccfe]/30 rounded-3xl bg-black/50 p-10 hover:border-[#02ccfe] transition-all duration-300 w-full h-auto">
                <CardItem translateZ="50" className="w-full">
                  <h3 className="text-3xl text-[#02ccfe] mb-4">
                    {program.title}
                  </h3>
                </CardItem>
                <CardItem translateZ="60" className="w-full">
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                </CardItem>
                <CardItem translateZ="70" className="w-full">
                  <div>
                    <p className="text-white mb-3">
                      <strong>Designed to help you:</strong>
                    </p>
                    <ul className="space-y-2">
                      {program.points.map((point, i) => (
                        <li key={i} className="pl-6 relative text-gray-300">
                          <span className="absolute left-0 text-[#02ccfe] font-bold">
                            →
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <section
        id="testimonials"
        className="testimonials-section py-20 px-8 bg-gray-950 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Real People. Real Growth. Real Direction.
        </h2>
        <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Our training has helped individuals gain clarity, confidence, and
          structure in their financial and skill-building journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <CardContainer
              key={index}
              className="w-full"
              containerClassName="py-0"
            >
              <CardBody className="bg-gray-900 border border-[#02ccfe]/30 rounded-xl p-8 hover:border-[#02ccfe] transition-all duration-300 w-full h-auto">
                <CardItem translateZ="50" className="w-full">
                  <p className="text-base leading-relaxed mb-6 italic text-gray-300">
                    "{testimonial.text}"
                  </p>
                </CardItem>
                <CardItem translateZ="60" className="w-full">
                  <div className="border-t border-[#02ccfe]/20 pt-4">
                    <p className="font-semibold text-lg mb-1 text-[#02ccfe]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>

      {/* Section 4: About the Training */}
      <section
        id="about"
        className="about-section py-20 px-8 bg-gray-900 max-w-7xl mx-auto relative overflow-hidden"
      >
        {/* DotGrid Background */}
        <div className="absolute inset-0 opacity-30">
          <DotGrid
            dotSize={6}
            gap={20}
            baseColor="#02ccfe"
            activeColor="#00b8e6"
            proximity={120}
            speedTrigger={80}
            shockRadius={250}
            shockStrength={4}
            className="h-full w-full"
          />
        </div>

        {/* Background Color Overlay */}
        <div className="absolute inset-0 bg-gray-900/80"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            About the Academy
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300">
            <p className="mb-6">
              Many people desire financial stability but lack proper guidance,
              structure, and direction.
            </p>
            <p className="mb-6">
              At Peach Tech Group, we believe the problem is not effort — it is
              lack of access to the right systems.
            </p>
            <p className="mb-4">
              <strong className="text-[#02ccfe]">
                This academy was created to:
              </strong>
            </p>
            <ul className="space-y-2 my-6">
              <li className="pl-8 relative">
                <span className="absolute left-0 text-[#02ccfe] font-bold text-xl">
                  ✓
                </span>
                bridge the knowledge gap
              </li>
              <li className="pl-8 relative">
                <span className="absolute left-0 text-[#02ccfe] font-bold text-xl">
                  ✓
                </span>
                provide practical learning
              </li>
              <li className="pl-8 relative">
                <span className="absolute left-0 text-[#02ccfe] font-bold text-xl">
                  ✓
                </span>
                build individuals through structured education
              </li>
            </ul>
            <p>
              We focus on teaching principles, systems, and skills that help you
              grow intentionally — not randomly.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section className="benefits-section py-20 px-8 bg-gray-950 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          What You Will Gain
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gray-900 rounded-lg border border-[#02ccfe]/30 transition-all duration-300 hover:border-[#02ccfe] hover:translate-x-1"
            >
              <div className="text-2xl text-[#02ccfe] font-bold shrink-0">
                ✓
              </div>
              <p className="text-gray-300 leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Registration CTA */}
      <section
        id="registration"
        className="text-center py-24 px-8 relative overflow-hidden"
      >
        {/* Threads Background */}
        <div className="absolute inset-0 opacity-40">
          <Threads
            color={[0.008, 0.8, 0.996]}
            amplitude={1.2}
            distance={0.15}
            enableMouseInteraction={true}
          />
        </div>

        {/* Background Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#02ccfe]/20 via-gray-900/70 to-gray-950/70"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Ready to Learn the Skill That Changes Direction?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            This is not about overnight success. This is about preparation,
            structure, and growth.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <a
              href="https://forms.gle/jEtsZLF7bHtgTLAu6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 text-xl font-semibold bg-[#02ccfe] text-black rounded-lg transition-all duration-300 hover:bg-[#00b8e6] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(2,204,254,0.3)]"
            >
              Join Forex Academy
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd8raQZUXuMtQt8rk5ngdrSYF9ipZebMTTK7jzlHzh-m7y8og/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-5 text-xl font-semibold bg-[#02ccfe] text-black rounded-lg transition-all duration-300 hover:bg-[#00b8e6] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(2,204,254,0.3)]"
            >
              Join AI Academy
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500 italic">
            Limited slots available. Selection is intentional.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-gray-950 border-t border-[#02ccfe]/30 text-gray-500">
        <p>&copy; 2026 Peach Tech Group. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
