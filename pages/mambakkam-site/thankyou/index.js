import style from "./style.module.css";
import Link from "next/link";

const ThankYou = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <section className={style.formSection}>
        <div className={style.formContainer + " " + " container"}>
          <div className="row align-items-center">
            <div className="col-md-8 offset-md-1">
              <h1 className={style.thankyou}>Thank you for registering</h1>
              <h4 className={style.contact}>
                Our representative will contact you soon.
              </h4>
            </div>

            <div className="col-md-3">
              <Link href="/">
                <a className={style.goHome}>Go Home</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center bg-dark py-2">
        <p className={"m-0 " + style.copyText}>
          Copyrights © {year}. All rights reserved.
        </p>
      </section>
    </>
  );
};

export default ThankYou;
