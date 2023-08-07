import { useState } from "react"

    const ContactView = () => {

      const [data, setData] = useState({email: '', text: ''})
  return (
    <section
    id="contact"
    className="p__container my-4 "
    >
      <form
      onSubmit={async (e) => {
          e.preventDefault()
          console.log("SENDIUNG")
          const responose = await fetch("/api/contact", {method: "POST", body: JSON.stringify({ ...data }  )})
          const res = await responose.text()
          console.log(res)
        }}
       className="flex flex-col justify-center gap-6 items-start border border-brand-secondary p-6">
        <input type="email"
        onChange={(e) => setData({...data, email: e.target.value})}
        placeholder="Email"
        className="input bg-surface border border-brand-secondary rounded-lg w-full max-w-xl text-white"
        />
        <textarea
        onChange={(e) => setData({...data, text: e.target.value})}
        className="textarea border bg-surface border-brand-secondary rounded-lg w-full max-w-xl text-white" 
        placeholder="Type your message here..."
          cols={30} rows={10}
        >

        </textarea>
        <input type="submit" value="Send"
        className="input text-white bg-brand border border-brand-secondary rounded-xl w-full max-w-md cursor-pointer self-end " 
        />
      </form>
    </section>
  )
}

export default ContactView