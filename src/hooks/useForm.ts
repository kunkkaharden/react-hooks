import { useState } from "react";

export default function useForm<A>(initialState: A) {
    const [formState, setFormState] = useState<A>(initialState);
    const handleInputChange = (e: any) => {
        setFormState({
          ...formState,
          [e.target.name]: e.target.value,
        });
      };
    return {
        formState,
        handleInputChange,
    }
}
