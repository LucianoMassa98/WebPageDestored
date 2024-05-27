import React, { useState } from 'react';
import useForm from "../hooks/useForms"

const Contact = () => {
   
  const initialData= {
    email: '',
    companyName: '',
    industry: '',
    projectDescription: '',
    projectObjectives: '',
    requiredFeatures: '',
    integrations: '',
    securityRequirements: '',
    projectDeadline: '',
    budget: '',
    additionalInfo: ''
  };
  

  const onValidate = (form) => {
    
    
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    // Email validation
     if (!form.email.trim()) {
        errors.email  = 'El campo "Correo" no debe ser vacio.'
      } else if (!regexEmail.test(form.email)){
        errors.email  = 'El campo "Correo" contiene un formato no valido.'
      }
    
    // Required fields validation  
      if (!form.companyName.trim()) {
        errors.companyName = 'El campo "CompanyName" no debe ser vacio.'
      } else if (!regexName.test(form.companyName)){
        errors.companyName = 'El campo "CompanyName" solo acepta letras y espacios.'
      }
  
      if (!form.industry.trim()) {
        errors.industry = 'El campo "industry" no debe ser vacio.'
      } else if (!regexComments.test(form.industry)){
        errors.industry = 'El campo "industry" acepta solo 255 caracteres.'
      }
    
      if (!form.projectDescription.trim()) {
        errors.projectDescription = 'El campo "projectDescription" no debe ser vacio.'
      } else if (!regexComments.test(form.projectDescription)){
        errors.projectDescription = 'El campo "projectDescription" acepta solo 255 caracteres.'
      }

      if (!form.projectObjectives.trim()) {
        errors.projectObjectives = 'El campo "projectObjectives" no debe ser vacio.'
      } else if (!regexComments.test(form.projectObjectives)){
        errors.projectObjectives = 'El campo "projectObjectives" acepta solo 255 caracteres.'
      }
     
      if (!form.requiredFeatures.trim()) {
        errors.requiredFeatures = 'El campo "requiredFeatures" no debe ser vacio.'
      } else if (!regexComments.test(form.requiredFeatures)){
        errors.requiredFeatures = 'El campo "requiredFeatures" acepta solo 255 caracteres.'
      }
    
      if (!form.integrations.trim()) {
        errors.integrations = 'El campo "integrations" no debe ser vacio.'
      } else if (!regexComments.test(form.integrations)){
        errors.integrations = 'El campo "integrations" acepta solo 255 caracteres.'
      }

      if (!form.securityRequirements.trim()) {
        errors.securityRequirements = 'El campo "securityRequirements" no debe ser vacio.'
      } else if (!regexComments.test(form.integrations)){
        errors.securityRequirements = 'El campo "securityRequirements" acepta solo 255 caracteres.'
      }

    if (!form.projectDeadline) {
      errors.projectDeadline = 'Project description is required.';
    }

    if (!form.budget) {
      errors.budget = 'Project description is required.';
    }
    
    if (!form.additionalInfo.trim()) {
      errors.additionalInfo = 'El campo "additionalInfo" no debe ser vacio.'
    } else if (!regexComments.test(form.integrations)){
      errors.additionalInfo = 'El campo "additionalInfo" acepta solo 255 caracteres.'
    }
    
    return errors
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(initialData, onValidate)

  return (
    <div id="contactUs" className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 min-h-[1324px] max-md:px-5">
     <div className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/fondo.png')" }}></div>
    <form className="flex relative flex-col mt-3.5 max-w-full w-[833px]" onSubmit={handleSubmit}>
        <p className="self-center text-4xl font-semibold leading-10 text-center text-[#4B3F7D] max-md:max-w-full mt-1.5">
          Formulario de Requisitos para{" "}
        </p>
        <p className="self-center mt-1.5 text-4xl font-semibold leading-10 text-center text-[#4B3F7D] max-md:max-w-full">
          Desarrollo de Software a Medida
        </p>
        <p className="self-center mt-3 text-xl leading-7 text-center text-[#4B3F7D] max-md:max-w-full">
          Para capturar los requisitos de un potencial cliente que desea un{" "}
        </p>
        <p className="self-center mt-2 text-xl leading-7 text-center text-[#4B3F7D]">
          software a medida
        </p>
            <div className="mt-9 text-2xl font-medium leading-8 text-[#4B3F7D] max-md:max-w-full">
              Correo electrónico del Cliente
              <div className="flex items-center mt-1 w-full px-4 py-2 text-xl border rounded border-solid shadow-sm bg-white hover:border-[#4B3F7D]">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/63b7c82d3a9e81e87ba06c26ee78f0bf38faf3b8a0fdf94645b93a745919e236?" 
                alt="Email Icon" className="shrink-0 w-7 h-7 mr-3"/>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Ingrese el correo electrónico del cliente" className="flex-grow outline-none bg-transparent"/>
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mt-8 text-2xl font-medium leading-8 text-[#4B3F7D] max-md:max-w-full">
            Nombre de la Empresa u Organización
            <input type="text" className="mt-1 block w-full px-4 py-2 text-xl rounded border border-solid shadow-sm bg-white hover:border-[#4B3F7D] border-opacity-20 text-indigo-950" 
            placeholder="Ejemplo: Empresa XYZ" name="companyName" value={form.companyName} onChange={handleChange}/>
            {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
          </div>
          <div className="mt-8 text-2xl font-medium leading-8 text-[#4B3F7D] max-md:max-w-full">
            Rubro
            <input type="text" className="mt-1 block w-full px-4 py-2 text-xl rounded border border-solid shadow-sm bg-white hover:border-[#4B3F7D] border-opacity-20 text-indigo-950" 
            placeholder="Ejemplo: Tecnología, Salud, Finanzas, etc." 
            name="industry" value={form.industry} onChange={handleChange}/>
            {errors.industry && <p className="text-red-500 text-sm">{errors.industry}</p>}
          </div>
          <div className="mt-8 text-2xl font-medium leading-8 text-[#4B3F7D] max-md:max-w-full">
            Breve descripción del proyecto
            <textarea className="mt-1 block w-full px-4 py-2 text-xl rounded border border-solid shadow-sm bg-white hover:border-[#4B3F7D] border-opacity-20 text-indigo-950" rows="4" placeholder="Describa brevemente el proyecto que necesita el software a medida"
            name="projectDescription" value={form.projectDescription} onChange={handleChange}>
            </textarea>
            {errors.projectDescription && <p className="text-red-500 text-sm">{errors.projectDescription}</p>}
          </div>
          <div className="mt-8 text-2xl font-medium leading-8 text-[#4B3F7D] max-md:max-w-full">
            Objetivos del proyecto
            <textarea className="mt-1 block w-full px-4 py-2 text-xl rounded border border-solid shadow-sm bg-white hover:border-[#4B3F7D] border-opacity-20 text-indigo-950" rows="4" placeholder="Describa los objetivos que espera alcanzar con este proyecto"
            name="projectObjectives" value={form.projectObjectives} onChange={handleChange}>
            </textarea>
            {errors.projectObjectives && <p className="text-red-500 text-sm">{errors.projectObjectives}</p>}
          </div>
          <div className="mt-8 text-2xl font-medium leading-8 text-[#4B3F7D] max-md:max-w-full">
            Funcionalidades requeridas
            <textarea className="mt-1 block w-full px-4 py-2 text-xl rounded border border-solid shadow-sm bg-white hover:border-[#4B3F7D] border-opacity-20 text-indigo-950" rows="4" placeholder="Enumere las funcionalidades clave que desea en el software a medida"
            name="requiredFeatures" value={form.requiredFeatures} onChange={handleChange}>
            </textarea>
            {errors.requiredFeatures && <p className="text-red-500 text-sm">{errors.requiredFeatures}</p>}
          </div>
          <div className="mt-8 text-2xl font-medium leading-8 text-[#4B3F7D] max-md:max-w-full">
            Integraciones necesarias
            <textarea className="mt-1 block w-full px-4 py-2 text-xl rounded border border-solid shadow-sm bg-white hover:border-[#4B3F7D] border-opacity-20 text-indigo-950" rows="4" placeholder="Detalle las integraciones con otros sistemas que sean necesarias"
            name="integrations" value={form.integrations} onChange={handleChange}>
            </textarea>
            {errors.integrations && <p className="text-red-500 text-sm">{errors.integrations}</p>}
          </div>
          <div className="mt-8 text-2xl font-medium leading-8 text-[#4B3F7D] max-md:max-w-full">
            Requisitos de seguridad y cumplimiento
            <textarea className="mt-1 block w-full px-4 py-2 text-xl rounded border border-solid shadow-sm bg-white hover:border-[#4B3F7D] border-opacity-20 text-indigo-950" rows="4" placeholder="Indique los requisitos específicos de seguridad y cumplimiento que deben cumplir"
            name="securityRequirements" value={form.securityRequirements} onChange={handleChange}>
            </textarea>
            {errors.securityRequirements && <p className="text-red-500 text-sm">{errors.securityRequirements}</p>}
          </div>
          <div className="mt-8 text-2xl font-medium leading-8 text-[#4B3F7D] max-md:max-w-full">
            Fecha límite del proyecto
            <input type="date" className="mt-1 block w-full px-4 py-2 text-xl rounded border border-solid shadow-sm bg-white hover:border-[#4B3F7D] border-opacity-20 text-indigo-950" 
              name="projectDeadline" value={form.projectDeadline} onChange={handleChange} required/>
          </div>
          <div className="mt-8 text-2xl font-medium leading-8 text-[#4B3F7D] max-md:max-w-full">
            Presupuesto
            <input type="number" className="mt-1 block w-full px-4 py-2 text-xl rounded border border-solid shadow-sm bg-white hover:border-[#4B3F7D] border-opacity-20 text-indigo-950" 
            name="budget" value={form.budget} onChange={handleChange} placeholder="Ingrese el presupuesto estimado" required/>
          </div>
          <div className="mt-8 text-2xl font-medium leading-8 text-[#4B3F7D] max-md:max-w-full">
            Información adicional
            <textarea className="mt-1 block w-full px-4 py-2 text-xl rounded border border-solid shadow-sm bg-white hover:border-[#4B3F7D] border-opacity-20 text-indigo-950" rows="4" placeholder="Proporcione cualquier información adicional que considere relevante"
            name="additionalInfo" value={form.additionalInfo} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="justify-center self-start px-7 py-4 mt-6 text-xl font-medium leading-8 text-center text-white whitespace-nowrap bg-indigo-600 rounded-md shadow max-md:px-5" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
          </form>
          </div>
  );
};

export default Contact;

