import ExpertiseSection from "../component/ExpertiseSection"
import ServicePreview from "../component/ServicePreview"
import { HomeBanner } from "../component/banner/HomeBanner"

export const Home = () => {
    return (
        <>
            <HomeBanner />
            <ExpertiseSection />
            <ServicePreview />
        </>
    )
}