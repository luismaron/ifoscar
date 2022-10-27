import Head from "next/head";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../../components/Form/Button";
import { InputWithLabel } from "../../components/Form/InputWithLabel";
import { Select } from "../../components/Form/Select";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { GetServerSideProps } from "next";
import { withSSRAuth } from "../../utils/withSSRAuth";

interface Student {
  id: string;
  name: string;
  gender: 'Male' | 'Female';
}

interface CreateVideoClipFormData {
  name: string;
  link: string;
  actor_id: number;
  actress_id: number;
  supporting_actor_id: number;
  supporting_actress_id: number;
}

const createVideoClipFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório."),
  link: yup.string().required("Link Obrigatório"),
  actor_id: yup.string().required("Ator principal obrigatório."),
  actress_id: yup.string().required("Atriz principal obrigatória."),
  supporting_actor_id: yup.string().required("Ator coadjuvante obrigatório."),
  supporting_actress_id: yup.string().required("Atriz principal obrigatória."),
})

export default function CreateVideoClip() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, reset, control } = useForm<CreateVideoClipFormData>({
    resolver: yupResolver(createVideoClipFormSchema)
  });

  async function loadData() {
    const response = await api.get("/students");

    setStudents(response.data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const handleCreateVideoClip: SubmitHandler<CreateVideoClipFormData> =
    async ({ name, link, actor_id, actress_id, supporting_actor_id, supporting_actress_id }) => {
      console.log('vai da o cu')
      setIsLoading(true);

      try {
        await api.post('/videoclips/create', {
          name,
          actress_id,
          actor_id,
          supporting_actor_id,
          supporting_actress_id,
          link
        });

        reset();

        toast.success("VideoClip criado.");
      }
      catch (error) {
        toast.error("Erro ao criar videoclip.");
        console.log(error)
      }
      finally {
        setIsLoading(false)
      }
    }

  return (

    <>
      <Head>
        <title>Dashboard IFOscar | Criação de videoclips</title>
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
            <h1 className="text-gray-150 text-4xl font-medium">Criação de fases</h1>
            <form className="mt-9 px-4" onSubmit={handleSubmit(handleCreateVideoClip)}>
              <div className="max-w-3xl w-full flex flex-col gap-4 mb-7">
                <div className="flex gap-5">
                  <InputWithLabel
                    label="Nome"
                    {...register("name")}
                    error={formState.errors.name?.message}
                  />
                </div>
                <div className="flex gap-5">

                  <InputWithLabel
                    label="Link"
                    {...register("link")}
                    error={formState.errors.link?.message}
                  />
                </div>

                <div className="flex gap-5">
                  <Select
                    label="Ator principal"
                    {...register("actor_id")}
                    options={
                      students.filter(student => student.gender === 'Male').
                        map(student => ({
                          id: student.id,
                          title: student.name,
                          value: student.id
                        }))}
                    error={formState.errors.actor_id?.message}
                  />
                </div>
                <div className="flex gap-5">
                  <Select
                    label="Atriz principal"
                    {...register("actress_id")}
                    options={
                      students.filter(student => student.gender === 'Female').
                        map(student => ({
                          id: student.id,
                          title: student.name,
                          value: student.id
                        }))}
                    error={formState.errors.actor_id?.message}
                  />
                </div>

                <div className="flex gap-5">
                  <Select
                    label="Ator coadjuvante"
                    {...register("supporting_actor_id")}
                    options={
                      students.filter(student => student.gender === 'Male').
                        map(student => ({
                          id: student.id,
                          title: student.name,
                          value: student.id
                        }))}
                    error={formState.errors.actor_id?.message}
                  />
                </div>

                <div className="flex gap-5">
                  <Select
                    label="Atriz coadjuvante"
                    {...register("supporting_actress_id")}
                    options={
                      students.filter(student => student.gender === 'Female').
                        map(student => ({
                          id: student.id,
                          title: student.name,
                          value: student.id
                        }))}
                    error={formState.errors.actor_id?.message}
                  />
                </div>

                <div className="mb-10">
                  <Button
                    loading={isLoading}
                    disabled={isLoading}
                    title="Criar VideoClip"
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {}
  }
})