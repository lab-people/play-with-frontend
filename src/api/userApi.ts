import {getData, postData} from "@/utils/client/postData";
import {IResponse} from "@/app/(auth)/login/interface";

interface IUser {
    "name": string;
    "birth": string;
    "email": string;
    "gender": string;
    "nickName": string;
    "password": string;
}

interface ILoginUser {
    username: string;
    password: string;
}

export const getUserTest = async (): Promise<void> => {
    const data: any = await getData('api/user/aaa');
    return data;
};


export const saveUser = async (payload: IUser): Promise<void> => {
    const data: any = await postData('api/user', payload);
    return data;
};

export const login = async (payload: ILoginUser): Promise<IResponse> => {
    const data: any = await postData('api/user/login', payload);
    return data;
};