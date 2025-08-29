import {Header} from "@/components/header"
import {HeroSection} from "@/components/hero-section"
import {OurStory} from "@/components/our-story"
import {ExpertiseApproach} from "@/components/expertise-approach"
import {PanelOfExperts} from "@/components/panel-of-experts"
import {PearlProtection} from "@/components/pearl-protection"
import {SpringeredRisks} from "@/components/springered-risks"
import {JoinAsExpert} from "@/components/join-as-expert"
import {OurClients} from "@/components/our-clients"
import {Footer} from "@/components/footer"
import {BrandingSlider} from "@/components/branding-slider";
import {MaturityCheck} from "@/components/maturity-check";
import {WhatWeDoUpgat} from "@/components/WhatWeDoUpgat";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header/>
            <main>
                <HeroSection/>
                <OurStory/>
                <ExpertiseApproach/>
                <PanelOfExperts/>
                {/*<WhatWeDo/>*/}
                <WhatWeDoUpgat/>
                <PearlProtection/>
                <SpringeredRisks/>
                <MaturityCheck/>
                <JoinAsExpert/>
                <BrandingSlider
                    title="Ours Clients & Partners"
                    subtitle=""
                    autoPlay={true}
                    speed={45}
                />

                <OurClients/>
            </main>
            <Footer/>
        </div>
    )
}
