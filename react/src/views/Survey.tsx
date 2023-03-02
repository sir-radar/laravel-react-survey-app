import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axiosClient from "../axios";
import TButton from "../components/TButton";
import Page from "../components/Page";
import PaginationLinks from "../components/PaginationLinks";
import SurveyListItem from "../components/SurveyListItem";

import useAppState from "../hooks/useAppState";
import { Survey } from "../models/stateModels";

export default function Surveys() {
  const { showToast } = useAppState();
  const [surveys, setSurveys] = useState<any>([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);

  const onDeleteClick = (id: string) => {
    if (window.confirm("Are you sure you want to delete this survey?")) {
      axiosClient.delete(`/survey/${id}`).then(() => {
        getSurveys();
        showToast("The survey was deleted");
      });
    }
  };

  const onPageClick = (link: any) => {
    getSurveys(link.url);
  };

  const getSurveys = (url = "/survey") => {
    setLoading(true);
    axiosClient.get(url).then(({ data }) => {
      setSurveys(data.data);
      setMeta(data.meta);
      setLoading(false);
    });
  };

  useEffect(() => {
    getSurveys();
  }, []);

  return (
    <Page
      title="Surveys"
      buttons={
        <TButton color="green" to="/surveys/create">
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create new
        </TButton>
      }
    >
      {loading && <div className="text-center text-lg">Loading...</div>}
      {!loading && (
        <div>
          {surveys.length === 0 && (
            <div className="py-8 text-center text-gray-700">
              You don't have surveys created
            </div>
          )}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {surveys.map((survey: any) => (
              <SurveyListItem
                survey={survey}
                key={survey.id}
                onDeleteClick={onDeleteClick}
              />
            ))}
          </div>
          {surveys.length > 0 && (
            <PaginationLinks meta={meta} onPageClick={onPageClick} />
          )}
        </div>
      )}
    </Page>
  );
}
