<script setup lang="ts">
const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)
import founder from "@/assets/img/founder1.jpg"
import ceo from "@/assets/img/ceo.jpg"
import businessDirector2 from "@/assets/img/business-director2.jpeg"
import IconTrophy from '@/components/icons/IconCheck.vue'
import IconWorker from '@/components/icons/IconUser.vue'
import IconFactory from '@/components/icons/IconConstruction.vue'
import IconClipboard from '@/components/icons/IconBlueprint.vue'
import IconTimer from '@/components/icons/IconClock.vue'
import IconRefresh from '@/components/icons/IconSuccess.vue'

const team = [
  {
    name: 'Late Engr Nojimu Adisa Yusuf',
    role: 'Founder',
    image: founder,
    bio: 'The visionary who laid the foundation of Klassmec, instilling values of integrity, precision, and engineering excellence that continue to guide the company today.',
    color: 'bg-slate-100',
  },
  {
    name: 'Dr. Mrs. Rosylyne Nojimu-Yusuf',
    role: 'Chief Executive Officer',
    image: ceo,
    bio: 'Leading Klassmec with decades of engineering and business acumen, driving the company\'s vision of world-class service delivery across Nigeria.',
    color: 'bg-slate-100',
  },
  {
    name: 'Adewale Nojimu-Yusuf',
    role: 'Business Director',
    image: businessDirector2,
    bio: 'Overseeing business development and client relations, ensuring Klassmec continues to build lasting partnerships with leading organizations.',
    color: 'bg-slate-100',
  },
  {
    name: 'Akeem Yusuf',
    role: 'Technical Director',
    image: '',
    bio: 'Overseeing business development and client relations, ensuring Klassmec continues to build lasting partnerships with leading organizations.',
    color: 'bg-slate-100',
  },
]

const advantages = [
  {
    icon: IconTrophy,
    title: 'Proven Industry Experience',
    desc: 'Over two decades of successfully navigating the Nigerian engineering terrain gives us an unmatched advantage in project planning and execution.',
  },
  {
    icon: IconWorker,
    title: 'Highly Skilled Professionals',
    desc: 'Our team of certified engineers, project managers, and technicians undergo continuous training to stay at the cutting edge of industry best practices.',
  },
  {
    icon: IconFactory,
    title: 'State-of-the-Art Facilities',
    desc: 'Our well-equipped fabrication yard features modern machinery, allowing us to deliver precision and quality while controlling timelines.',
  },
  {
    icon: IconClipboard,
    title: 'Commitment to Standards',
    desc: 'We operate in strict compliance with Nigerian (COREN, SON) and international engineering standards (API, ASME, AWS), ensuring reliability and safety.',
  },
  {
    icon: IconTimer,
    title: 'Efficient Project Management',
    desc: 'Our agile and lean project execution methodology minimizes waste, reduces costs, and ensures on-time project delivery.',
  },
  {
    icon: IconRefresh,
    title: 'End-to-End Solutions',
    desc: 'From design to maintenance, our ability to handle all aspects of a project provides clients with a seamless, hassle-free experience.',
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) isVisible.value = true },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section ref="sectionRef" class="py-24 bg-white overflow-hidden">
    <div class="section-container">
      <!-- Leadership -->
      <div
        :class="[
          'text-center mb-16 transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
      >
        <span class="section-tag mb-4">Our People</span>
        <h2 class="section-title mb-4">
          Meet Our
          <span class="text-forest-700"> Leadership</span>
        </h2>
        <div class="mx-auto gold-divider mb-4"></div>
        <p class="section-subtitle max-w-xl mx-auto">
          Guided by experienced leaders who bring decades of engineering and business expertise to every project.
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        <div
          v-for="(member, i) in team"
          :key="member.name"
          :class="[
            'group transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
          ]"
          :style="`transition-delay: ${i * 100}ms`"
        >
          <!-- Image Wrapper -->
          <div class="aspect-square rounded-2xl overflow-hidden bg-slate-100 mb-6 shadow-sm border border-slate-200/50">
            <template v-if="member.image">
              <img 
                :src="member.image" 
                :alt="member.name"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              />
            </template>
            <template v-else>
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200">
                <span class="text-4xl font-display font-bold text-forest-700/30">
                  {{ member.name.split(' ').map(n => n[0]).slice(0, 2).join('') }}
                </span>
              </div>
            </template>
          </div>
          
          <!-- Info -->
          <div class="text-center px-2">
            <h3 class="font-display text-lg font-bold text-slate-900 mb-1 leading-tight">
              {{ member.name }}
            </h3>
            <p class="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">
              {{ member.role }}
            </p>
            <!-- Note: Bio is omitted to match the reference image style which is cleaner -->
          </div>
        </div>
      </div>

      <!-- Competitive Advantage -->
      <div class="bg-gradient-to-br from-forest-950 to-forest-800 rounded-3xl p-10 lg:p-14 relative overflow-hidden">
        <div class="absolute inset-0 hero-pattern opacity-20"></div>
        <div class="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold-500/10 translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

        <div class="relative z-10">
          <div
            :class="[
              'text-center mb-12 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ]"
          >
            <span class="inline-flex items-center gap-2 rounded-full bg-gold-500/20 border border-gold-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">
              Why Choose Us
            </span>
            <h2 class="font-display text-3xl font-bold text-white sm:text-4xl">
              The Klassmec Edge:
              <span class="text-gold-400"> Our Competitive Advantage</span>
            </h2>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(adv, i) in advantages"
              :key="adv.title"
              :class="[
                'group rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:bg-white/10 hover:border-forest-400/50 transition-all duration-300 cursor-default',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
              ]"
              :style="`transition-delay: ${(i + 6) * 100}ms`"
            >
              <div class="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <component :is="adv.icon" class="inline w-8 h-8 align-middle" />
              </div>
              <h4 class="font-semibold text-white text-sm mb-2">{{ adv.title }}</h4>
              <p class="text-xs text-white/60 leading-relaxed">{{ adv.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
