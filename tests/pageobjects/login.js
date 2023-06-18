class login {
    get userInput() {
        return $("#user-name");
    };

    get passwordInput() {
        return $("#password");
    };

    get loginBtn() {
        return $("#login-button");
    };

    get lockedIcon() {
        return $("svg[data-icon='times-circle']");
    };

    get errorMessage() {
        return $("#login_button_container > div > form > div.error-message-container.error");
    };

    async fillFields(username, password) {
        await this.userInput.setValue(username);
        await this.passwordInput.setValue(password);
    };

    async loginBtnClick() {
        await this.loginBtn.click();
    };
}

export default new login();

