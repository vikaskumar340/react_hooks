import useToggle from "../../hooks/useToggle";
export default function ToggleTest() {
    const [isOpen, toggle] = useToggle();
    const [isTest, toggleTest] = useToggle();
    return (
        <>
            <button className="btn btn-sm btn-success" onClick={() => toggle()}> Toogle </button>
            {isOpen &&  <p> <strong>Hello, i am visible!</strong> </p>  }

            <hr />

            <button className="btn btn-sm btn-success" onClick={() => toggleTest()}> Toogle Test </button>
            {isTest &&  <p> <strong>Hello, i am visible with test toggle!</strong> </p>  }

        </>
    )
}