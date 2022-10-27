import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import { Button } from "../../components/Form/Button";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

interface CreateStudentFormData {
  name: string;
  registration: string;
  gender: boolean;
}

const createStudentFormSchema = yup.object().shape({
  name: yup.string().required('Título obrigatório'),
  gender: yup.string().required("Selecione um sexo.").oneOf(['Male', 'Female']),
  registration: yup.string().min(0).required('Matrícula obrigatória').typeError("Número inválido.")
})



export default function CreateStudents() {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm<CreateStudentFormData>({
    resolver: yupResolver(createStudentFormSchema)
  });

  const handleCreateStudents: SubmitHandler<CreateStudentFormData> =
    async ({ name, registration, gender }) => {
      setIsLoading(true);

      try {
        await api.post('/students/create', {
          name,
          registration,
          gender
        });


        reset();

        toast.success("Estudante criado(a).");


      }
      catch (error) {
        toast.error("Erro ao criar estudante.");
        console.log(error)
      }
      finally {
        setIsLoading(false)
      }
    }

  return (
    <>
      <Head>
        <title>Dashboard IFOscar | Criação de estudantes</title>
      </Head>
      <div className="h-screen bg-gray-950 overflow-auto">
        <Header />
        <div className="flex w-full">
          <ToastContainer
            theme="colored"
            toastClassName="errorAlert"
            autoClose={2000}
            pauseOnHover={false}
          />
          <Sidebar />

          <div className="mt-10 ml-10 flex flex-col">
            <h1 className="text-gray-150 text-4xl font-medium">Criação de estudantes</h1>
            <form onSubmit={handleSubmit(handleCreateStudents)} className="mt-9 px-4">
              <div className="max-w-3xl w-full flex flex-col gap-4 mb-7">
                <div className="flex gap-5">
                  <InputWithLabel
                    label="Name"
                    {...register("name")}
                    error={formState.errors.name?.message}
                  />
                </div>
                <div className="flex gap-5">
                  <InputWithLabel
                    label="Registration"
                    {...register("registration")}
                    error={formState.errors.registration?.message}
                  />
                </div>
                <div className="flex gap-5">
                  <InputWithLabel
                    type="radio"
                    label="Masculino"
                    value="Male"
                    {...register("gender")}
                    error={formState.errors.gender?.message}
                  />
                  <InputWithLabel
                    type="radio"
                    label="Feminino"
                    value="Female"
                    {...register("gender")}
                    error={formState.errors.gender?.message}
                  />
                </div>
              </div>
              <div className="mb-10">
                <Button
                  loading={isLoading}
                  disabled={isLoading}
                  title="Criar Estudante"
                  type="submit"
                />
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}