const ContactForm = () => {
  return (
    <div className="py-20 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Свяжитесь с нами</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full px-6 py-4 rounded-full border-2 border-primary/20 focus:border-primary outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Ваш email"
              className="w-full px-6 py-4 rounded-full border-2 border-primary/20 focus:border-primary outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Ваше сообщение"
              rows={4}
              className="w-full px-6 py-4 rounded-3xl border-2 border-primary/20 focus:border-primary outline-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn-primary">
              Отправить сообщение
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;