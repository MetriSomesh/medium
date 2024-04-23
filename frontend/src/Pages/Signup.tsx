import { Quote } from "../Components/Quote";
import { AuthCompoent } from "../Components/AuthComp";
export const SignUp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <AuthCompoent type="signup" />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};
