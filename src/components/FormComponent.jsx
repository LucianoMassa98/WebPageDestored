const FormComponent = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-600 to-violet-500">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full h-full max-w-xl">

            <h2 className="text-3xl font-bold text-center text-black-600 mb-6">
       
      </h2>
                <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLScq9z1-TInMgxAIKuEjQNLym2kERaYyAckPT9NL4_wIPk7gnQ/viewform?embedded=true" 
                    width="100%" 
                    height="720px" 
                    className="rounded-lg border-2 border-purple-600">
                    Cargando…
                </iframe>


                <h2 className="text-3xl font-bold text-center text-black-600 mb-6">
       Agendar Reunion
      </h2>
                <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0mqvUCIiZ9aLcfqxaabrIFwjPWMVPFps7AMzc8_Wruw26V2flGiaxqU9iBW4_ZMlZVm_HA6eEX?gv=true"  
                width="100%" 
                height="720px" 
                className="rounded-lg border-2 border-purple-600 mt-2"

                >Cargando...</iframe>
            </div>
        </div>
    );
};

export default FormComponent;