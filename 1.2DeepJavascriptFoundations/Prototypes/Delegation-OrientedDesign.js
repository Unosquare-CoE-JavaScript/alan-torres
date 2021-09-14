
// Delegation: Design Pattern


// Delegation-Oriented Design

var AuthController = {
    authenticate() {
        server.authenticate(
            [ this.username, this.password ],
            this.handleResponse.bind(this)
        );
    },
    handleResponse(resp) {
        if (!resp.ok) this.displayError(resp.msg);
    }
};

var LoginFormController = 
    Object.assign(Object.create(AuthController), {
        onSubmit() {
            this.username = this.$username.val();
            this.password = this.$password.val();
            this.authenticate();
        },
        displayError(msg) {
            alert(msg);
        }
    });
