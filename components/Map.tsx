export const Map = () => {
    return (
        <div className=" flex justify-center ">
            <iframe
                className={"flex-1 max-w-5xl  "}
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.483823520149!2d39.2247743!3d21.567029599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d107b0405037%3A0x20e3c5c1ae2d7034!2z2LTYsdmD2Kkg2YXZhtin2LLZhCDYp9mE2LnZhdix2KfZhiDZhNiq2LfZiNmK2LEg2YjYp9mE2KfYs9iq2KvZhdin2LEg2KfZhNi52YLYp9ix2Yo!5e0!3m2!1sen!2s!4v1719440638007!5m2!1sen!2s"
                style={{ border: 0 }}
                title="address"
            />
        </div>
    );
};
