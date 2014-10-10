class ContactController < ApplicationController

    respond_to :json

    def new
        data = person_params
        if person_params
            respond_with Person.create(data)
        else
            respond_with data
        end
    end

    private
    def person_params
        begin
            return params.permit(:first_name, :last_name, :email, :phone)
        rescue
            return nil
        end
    end

    def error message
        {
            message: message,
            params: params
        }
    end

end
