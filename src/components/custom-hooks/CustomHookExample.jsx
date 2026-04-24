import ToggleTest from "./ToggleTest"
import UsersList from "./UsersList";
import LoginForm from "./LoginForm";
export default function CustomHookExample() {
    return (
        <div className="container mt-4">
            <ToggleTest/>
            <hr />
            <UsersList />
            <hr />
            <LoginForm/>

        </div>
    )
}
