class ContactController < ApplicationController

    respond_to :json

    def create
        data = person_params
        if person_params
            render json: Person.create(data)
        else
            render json: message("We have an error happening")
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

end
