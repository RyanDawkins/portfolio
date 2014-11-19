class ContactController < RestController

    private
    def get_class
        Person
    end

    def from_params
        params.permit(:first_name, :last_name, :email, :phone)
    end
end
