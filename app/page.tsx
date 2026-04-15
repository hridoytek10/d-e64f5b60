import DoctorHeader from "@/components/doctor/header"
import DoctorHero from "@/components/doctor/hero"
import DoctorAbout from "@/components/doctor/about"
import DoctorServices from "@/components/doctor/services"
import DoctorEducation from "@/components/doctor/education"
import DoctorReviews from "@/components/doctor/reviews"
import DoctorClinic from "@/components/doctor/clinic"
import DoctorFAQ from "@/components/doctor/faq"
import DoctorContact from "@/components/doctor/contact"
import DoctorFooter from "@/components/doctor/footer"
import siteData from "@/data/site.json"

export const metadata = {
  title: siteData.siteTitle,
  description: siteData.siteDescription,
  openGraph: {
    title: siteData.siteTitle,
    description: siteData.siteDescription,
    image: "/preview.png",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <DoctorHeader data={siteData.header} />
      <DoctorHero data={siteData.hero} />
      <DoctorAbout data={siteData.about} />
      <DoctorServices services={siteData.services} />
      <DoctorEducation education={siteData.education} />
      <DoctorReviews reviews={siteData.reviews} />
      <DoctorClinic clinic={siteData.clinic} />
      <DoctorFAQ faq={siteData.faq} />
      <DoctorContact contact={siteData.contact} />
      <DoctorFooter footer={siteData.footer} />
    </div>
  )
}
