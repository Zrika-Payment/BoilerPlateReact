import { Divide } from "lucide-react";
import { Card } from "../components/common/Card";
import { Input } from "../components/common/Input";
import Button from "../components/common/Button";
import { CardHeader } from "../components/common/Card";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
export function LoginPage() {
    const { data, loading, fetchData } = useFetch();
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState({ userError: "", passError: "" });



    function handleLogin(e) {

        let hashError = false;
        if (!username.trim()) {
            setError(prev => ({
                ...prev,
                userError: 'UserName is required'
            }))
            hashError = true;
        }

        if (!password.trim()) {
            setError(prev => ({
                ...prev,
                passError: 'password is required'
            }))
            hashError = true;
        }

        // const passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$';
        // let hashError = false;
        // if (!username.trim()) {
        //     setError(prev => ({
        //         ...prev,
        //         userError: 'UserName is required'
        //     }))
        //     hashError = true;
        // } else if (!/^[a-zA-Z0-9._]{3,20}$/.test(username)) {
        //     setError(prev => ({
        //         ...prev,
        //         userError: 'UserName Invaild'
        //     }))
        //     hashError = true;
        // }
        // if (!password.trim()) {
        //     setError(prev => ({
        //         ...prev,
        //         passError: 'password is required'
        //     }))
        //     hashError = true;
        // } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
        //     setError(prev => ({
        //         ...prev,
        //         passError: 'Password must be strong'
        //     }))
        //     hashError = true;
        // }
        // if (!hashError) {
        //     setError({ userError: "", passError: "" })
        // }
        userDetails('https://dummyjson.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: username,
                password: password,
                expiresInMins: 30, // optional, defaults to 60
            })
        })

    }


    return (<div>
        <div className="flex justify-center align-middle h-screen">
            <Card className={`w-xl h-2/4`} >
                <CardHeader className={`flex justify-center`}>Login</CardHeader>
                <Input label={'UserName'} type={'text'} placeholder={'UserName'} onChange={(e) => setUsername(e.target.value)} className="w-2" error={error.userError}></Input>
                <h4 className="text-blue-300"></h4>
                <Input label={"password"} type={'password'} placeholder={'password'} onChange={(e) => setpassword(e.target.value)} error={error.passError}></Input>
                <h4 className="text-blue-300"></h4>

                <Button onClick={(e) => handleLogin(e)}>Login</Button>
            </Card>

        </div>

    </div>)
}