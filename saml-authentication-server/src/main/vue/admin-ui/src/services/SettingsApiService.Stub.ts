import {ApiCallResult, ISettingsApiService, SamlSettings} from "@/services/ISettingsApiService";

export default class SettingsApiServiceStub implements ISettingsApiService {
    public get(): Promise<ApiCallResult<SamlSettings>> {
        return new Promise<ApiCallResult<SamlSettings>>(((resolve) => {
            setTimeout(() => {
                resolve({
                    result: {
                        ssoEndpoint: "some endpoint",
                        entityId: "some entity id",
                        publicCertificate: "some public certificate",
                        issuerUrl: "some issuer url",
                        ssoCallbackUrl: "some callback url",
                        hideLoginForm: false,
                        ssoLoginButtonName: "Login with SSO",
                    },
                });
            }, 1000);
        }));
    }

    public save(settings: SamlSettings): Promise<ApiCallResult<SamlSettings>> {
        return new Promise<ApiCallResult<SamlSettings>>((resolve) => {
            setTimeout(() => {
                if (settings.ssoEndpoint === "error") {
                    resolve({
                        errors: [{message: "Some error", code: 100}, {message: "ANother error", code: 200}],
                    });
                } else {
                    resolve({result: settings});
                }
            }, 500);
        });
    }

    public importMetadata(metadata: string): Promise<ApiCallResult<SamlSettings>> {
        return new Promise<ApiCallResult<SamlSettings>>(((resolve) => {
            setTimeout(() => {
                resolve({
                    result: {
                        ssoEndpoint: "some endpoint from metadata",
                        entityId: "some entity id from metadata",
                        publicCertificate: "some public certificate from metadata",
                        issuerUrl: "some issuer url from metadata",
                        ssoCallbackUrl: "some callback url from metadata",
                        hideLoginForm: false,
                        ssoLoginButtonName: "Login with SSO",
                    },
                });
            }, 1000);
        }));
    }
}
