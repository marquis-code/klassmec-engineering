
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const AboutSection: typeof import("../components/AboutSection.vue")['default']
export const ClientsSection: typeof import("../components/ClientsSection.vue")['default']
export const ContactSection: typeof import("../components/ContactSection.vue")['default']
export const FooterSection: typeof import("../components/FooterSection.vue")['default']
export const GallerySection: typeof import("../components/GallerySection.vue")['default']
export const HeroSection: typeof import("../components/HeroSection.vue")['default']
export const IndustriesSection: typeof import("../components/IndustriesSection.vue")['default']
export const NavBar: typeof import("../components/NavBar.vue")['default']
export const ProjectsSection: typeof import("../components/ProjectsSection.vue")['default']
export const ScrollTopButton: typeof import("../components/ScrollTopButton.vue")['default']
export const ServicesSection: typeof import("../components/ServicesSection.vue")['default']
export const TeamSection: typeof import("../components/TeamSection.vue")['default']
export const VisionSection: typeof import("../components/VisionSection.vue")['default']
export const IconsIconBlueprint: typeof import("../components/icons/IconBlueprint.vue")['default']
export const IconsIconBlueprint2: typeof import("../components/icons/IconBlueprint2.vue")['default']
export const IconsIconCalendar: typeof import("../components/icons/IconCalendar.vue")['default']
export const IconsIconCheck: typeof import("../components/icons/IconCheck.vue")['default']
export const IconsIconClients: typeof import("../components/icons/IconClients.vue")['default']
export const IconsIconClock: typeof import("../components/icons/IconClock.vue")['default']
export const IconsIconConstruction: typeof import("../components/icons/IconConstruction.vue")['default']
export const IconsIconEmail: typeof import("../components/icons/IconEmail.vue")['default']
export const IconsIconExperience: typeof import("../components/icons/IconExperience.vue")['default']
export const IconsIconGlobe: typeof import("../components/icons/IconGlobe.vue")['default']
export const IconsIconHandshake: typeof import("../components/icons/IconHandshake.vue")['default']
export const IconsIconInfo: typeof import("../components/icons/IconInfo.vue")['default']
export const IconsIconLocation: typeof import("../components/icons/IconLocation.vue")['default']
export const IconsIconOnTime: typeof import("../components/icons/IconOnTime.vue")['default']
export const IconsIconPhone: typeof import("../components/icons/IconPhone.vue")['default']
export const IconsIconProject: typeof import("../components/icons/IconProject.vue")['default']
export const IconsIconSuccess: typeof import("../components/icons/IconSuccess.vue")['default']
export const IconsIconTimer: typeof import("../components/icons/IconTimer.vue")['default']
export const IconsIconUser: typeof import("../components/icons/IconUser.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const SchemaOrgArticle: typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']
export const SchemaOrgBreadcrumb: typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']
export const SchemaOrgComment: typeof import("@unhead/schema-org/vue")['SchemaOrgComment']
export const SchemaOrgEvent: typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']
export const SchemaOrgFoodEstablishment: typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']
export const SchemaOrgHowTo: typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']
export const SchemaOrgImage: typeof import("@unhead/schema-org/vue")['SchemaOrgImage']
export const SchemaOrgJobPosting: typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']
export const SchemaOrgLocalBusiness: typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']
export const SchemaOrgOrganization: typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']
export const SchemaOrgPerson: typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']
export const SchemaOrgProduct: typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']
export const SchemaOrgQuestion: typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']
export const SchemaOrgRecipe: typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']
export const SchemaOrgReview: typeof import("@unhead/schema-org/vue")['SchemaOrgReview']
export const SchemaOrgVideo: typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']
export const SchemaOrgWebPage: typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']
export const SchemaOrgWebSite: typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']
export const SchemaOrgMovie: typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']
export const SchemaOrgCourse: typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']
export const SchemaOrgItemList: typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']
export const SchemaOrgBook: typeof import("@unhead/schema-org/vue")['SchemaOrgBook']
export const SchemaOrgSoftwareApp: typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAboutSection: LazyComponent<typeof import("../components/AboutSection.vue")['default']>
export const LazyClientsSection: LazyComponent<typeof import("../components/ClientsSection.vue")['default']>
export const LazyContactSection: LazyComponent<typeof import("../components/ContactSection.vue")['default']>
export const LazyFooterSection: LazyComponent<typeof import("../components/FooterSection.vue")['default']>
export const LazyGallerySection: LazyComponent<typeof import("../components/GallerySection.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/HeroSection.vue")['default']>
export const LazyIndustriesSection: LazyComponent<typeof import("../components/IndustriesSection.vue")['default']>
export const LazyNavBar: LazyComponent<typeof import("../components/NavBar.vue")['default']>
export const LazyProjectsSection: LazyComponent<typeof import("../components/ProjectsSection.vue")['default']>
export const LazyScrollTopButton: LazyComponent<typeof import("../components/ScrollTopButton.vue")['default']>
export const LazyServicesSection: LazyComponent<typeof import("../components/ServicesSection.vue")['default']>
export const LazyTeamSection: LazyComponent<typeof import("../components/TeamSection.vue")['default']>
export const LazyVisionSection: LazyComponent<typeof import("../components/VisionSection.vue")['default']>
export const LazyIconsIconBlueprint: LazyComponent<typeof import("../components/icons/IconBlueprint.vue")['default']>
export const LazyIconsIconBlueprint2: LazyComponent<typeof import("../components/icons/IconBlueprint2.vue")['default']>
export const LazyIconsIconCalendar: LazyComponent<typeof import("../components/icons/IconCalendar.vue")['default']>
export const LazyIconsIconCheck: LazyComponent<typeof import("../components/icons/IconCheck.vue")['default']>
export const LazyIconsIconClients: LazyComponent<typeof import("../components/icons/IconClients.vue")['default']>
export const LazyIconsIconClock: LazyComponent<typeof import("../components/icons/IconClock.vue")['default']>
export const LazyIconsIconConstruction: LazyComponent<typeof import("../components/icons/IconConstruction.vue")['default']>
export const LazyIconsIconEmail: LazyComponent<typeof import("../components/icons/IconEmail.vue")['default']>
export const LazyIconsIconExperience: LazyComponent<typeof import("../components/icons/IconExperience.vue")['default']>
export const LazyIconsIconGlobe: LazyComponent<typeof import("../components/icons/IconGlobe.vue")['default']>
export const LazyIconsIconHandshake: LazyComponent<typeof import("../components/icons/IconHandshake.vue")['default']>
export const LazyIconsIconInfo: LazyComponent<typeof import("../components/icons/IconInfo.vue")['default']>
export const LazyIconsIconLocation: LazyComponent<typeof import("../components/icons/IconLocation.vue")['default']>
export const LazyIconsIconOnTime: LazyComponent<typeof import("../components/icons/IconOnTime.vue")['default']>
export const LazyIconsIconPhone: LazyComponent<typeof import("../components/icons/IconPhone.vue")['default']>
export const LazyIconsIconProject: LazyComponent<typeof import("../components/icons/IconProject.vue")['default']>
export const LazyIconsIconSuccess: LazyComponent<typeof import("../components/icons/IconSuccess.vue")['default']>
export const LazyIconsIconTimer: LazyComponent<typeof import("../components/icons/IconTimer.vue")['default']>
export const LazyIconsIconUser: LazyComponent<typeof import("../components/icons/IconUser.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazySchemaOrgArticle: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']>
export const LazySchemaOrgBreadcrumb: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']>
export const LazySchemaOrgComment: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgComment']>
export const LazySchemaOrgEvent: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']>
export const LazySchemaOrgFoodEstablishment: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']>
export const LazySchemaOrgHowTo: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']>
export const LazySchemaOrgImage: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgImage']>
export const LazySchemaOrgJobPosting: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']>
export const LazySchemaOrgLocalBusiness: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']>
export const LazySchemaOrgOrganization: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']>
export const LazySchemaOrgPerson: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']>
export const LazySchemaOrgProduct: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']>
export const LazySchemaOrgQuestion: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']>
export const LazySchemaOrgRecipe: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']>
export const LazySchemaOrgReview: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgReview']>
export const LazySchemaOrgVideo: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']>
export const LazySchemaOrgWebPage: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']>
export const LazySchemaOrgWebSite: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']>
export const LazySchemaOrgMovie: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']>
export const LazySchemaOrgCourse: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']>
export const LazySchemaOrgItemList: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']>
export const LazySchemaOrgBook: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBook']>
export const LazySchemaOrgSoftwareApp: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
