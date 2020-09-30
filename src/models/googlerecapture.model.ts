import { IRecapture } from "../interfaces/googlerecapture.interface";

export class Recapture implements IRecapture {
    siteKey: string;
    theme: string;
    language: string;
    size: string;
    type: string;
    useGlobalDomain: boolean;

    reset() {
        throw new Error("Method not implemented.");
        // handleReset();
    }
    expire() {
        throw new Error("Method not implemented.");
        // handleExpire();
    }
    error() {
        throw new Error("Method not implemented.");
        // handleError();
    }
    load() {
        throw new Error("Method not implemented.");
        // handleLoad();
    }
    success() {
        throw new Error("Method not implemented.");
        // handleSuccess($event);
    }
}