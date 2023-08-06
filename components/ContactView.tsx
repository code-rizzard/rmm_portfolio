    const ContactView = () => {
  return (
    <section
    id="contact"
    className="p__container my-4 "
    >
      <form
      onSubmit={(e) => {
          e.preventDefault()
          alert("This is just a demo. You can't send a message.")
        }}
       className="flex flex-col justify-center gap-6 items-start border border-brand-secondary p-6">
        <input type="email"
        placeholder="Email"
        className="input bg-surface border border-brand-secondary rounded-lg w-full max-w-xl text-white"
        />
        <textarea
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