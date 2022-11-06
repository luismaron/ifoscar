import Head from "next/head";
import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../../components/Form/Button";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

export default function UploadStudents() {
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (evt: any) => {
    setFile(evt.target.files[0]);
  };

  async function handleUploadStudents(evt: FormEvent) {
    evt.preventDefault();

    setIsLoading(true);

    if (file) {
      let formData = new FormData();
      formData.append('file', file);

      try {
        await api.post("/students/upload", formData);

        toast.success("Upload feito com sucesso!");
      } catch (error) {
        toast.error("Erro ao fazer o upload do arquivo CSV.");
      } finally {
        setIsLoading(false);
      }
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
            <h1 className="text-gray-150 text-4xl font-medium">Upload de estudantes</h1>
            <form onSubmit={handleUploadStudents} className="mt-9 px-4">
              <div className="mb-10">
                <div className="max-w-3xl w-full flex flex-col gap-4 mb-7">
                  <input 
                    className="text-yellow-500"
                    type="file" 
                    accept={".csv"} 
                    onChange={handleOnChange} 
                    name="file" 
                    id="file"
                  />
                </div>
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