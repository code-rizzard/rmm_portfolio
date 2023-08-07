import { useReCaptcha } from "next-recaptcha-v3";
import { useState } from "react"

const ContactView = () => {

  const [data, setData] = useState({email: '', text: ''})

  const { executeRecaptcha } = useReCaptcha();

  return (
    <section
    id="contact"
    className="p__container border-t border-brand-secondary my-4 flex gap-6 flex-col "
    >
      <h3
      className="text-3xl font-bold"
      >Contact Me</h3>
      <form  
        onSubmit={async (e) => {
            e.preventDefault()
            if(!data.email || !data.text) return alert("Please fill all the fields")
            const recaptchaToken = await executeRecaptcha("contact_submit")
            console.log("SENDIUNG")
            const responose = await fetch("/api/contact", {method: "POST", body: JSON.stringify({ ...data, recaptchaToken }  )})
            const res = await responose.text()
            console.log(res)
          }}
        className="flex flex-col gap-6 items-stretch"
        >
          <input type="email"
          onChange={(e) => setData({...data, email: e.target.value})}
          placeholder="Email"
          className="input bg-surface border border-brand-secondary rounded-lg w-full text-white"
          />
          <textarea
          onChange={(e) => setData({...data, text: e.target.value})}
          className="textarea border bg-surface border-brand-secondary rounded-lg w-full text-white" 
          placeholder="Type your message here..."
            cols={30} rows={10}
          >

          </textarea>
          <input type="submit" value="Send"
          className="input text-xl text-white bg-brand border border-brand-secondary rounded-xl w-full sm:max-w-[240px] cursor-pointer self-end " 
          />
        </form>
    </section>
  )
}

export default ContactView