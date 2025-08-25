import ThemeToggle from "./ThemeToggle"
import {navItems} from "../constants"
const Footer = () => {

    const Navigation = navItems.filter((item) => item.category === "Navigation");
    const socialLinks = navItems.filter((item)=> item.category === "Social");
  return (
    <section className="min-h-fit w-full overflow-hidden relative">

        <div className="h-full w-full bg-green-400 px-22 py-8 relative">

            <div className="flex justify-between text-left">

                <div className="h-full w1/2 flex flex-col items-start justify-center">
                <img src="/public/assets/logo.png" className="h-10 w-10 object-cover" alt="Logo png" />
                <p>Hello, I'm Shamir Ali a Full Stack developer</p>
                </div>

                <div className="h-full w-1/2 flex items-center justify-around">

                <div>

                <div>
                <p>General</p>
                </div>

                {Navigation.map((item, index) => (
                    <div key={index}>
                    <p>{item.name}</p>
                    </div>
                ))}
                </div>

                <div>
                    
                <div>
                <p>Social</p>
                </div>
                {socialLinks.map((item, index) => (
                    <div key={index}>
                    <p>{item.name}</p>
                    </div>
                ))}
                </div>

                </div>
            </div>
            <div className="py-8">
        <ThemeToggle />
            </div>
        </div>

    </section>
  )
}

export default Footer