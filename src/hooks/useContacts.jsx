import axios from "axios";
import { useQuery } from "react-query";

const useContacts = () => {
  const {
    data: contactsData = [],
    isLoading: cLoading,
    refetch,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axios.get(
        "https://easy-note-backend.vercel.app/api/contacts"
      );
      return res.data;
    },
  });

  return { contactsData, cLoading, refetch };
};

export default useContacts;
