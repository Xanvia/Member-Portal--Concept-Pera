import LeftSide from "@src/components/registerPage/leftSide";
import RightSide from "@src/components/registerPage/rightSide";

const isRegistered = true;
var Mode = isRegistered ? RightSide : LeftSide;

export default function Register() {
  return (
    <section className="h-full bg-neutral-100 dark:bg-neutral-700">
      <div className="h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-100 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-cp-blue shadow-lg dark:bg-neutral-800">
              <form>
                <Mode />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
