import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../UI/forms/header/Header";
import Spinner from "../../UI/spinner/Spinner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classes from "./uploadmovie.module.css";
import { uploadMovie, uploadMovieCover } from "../../../util/http";

export default function Uploadmovie() {
  const router = useRouter();

  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");
  const [casts, setCast] = useState("");

  const [loading, setLoading] = useState(false);

  const [movieCast, setMovieCast] = useState([]);

  async function uploadHandler(e) {
    e.preventDefault();
    const data = {
      name,
      price,
      description,
      time,
      image: `/images/movies/${image.name}`,
      casts: movieCast,
    };

    try {
      setLoading(true);
      const picture = await uploadMovieCover({ image });
      const response = await uploadMovie(data);
      if (response.status !== "success") {
        setLoading(false);
        return toast.error(response.message);
      }
      toast.success(response.message);
      setLoading(false);
      router.replace("/admin");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.message);
      return;
    }
  }
  function castHandler() {
    const cast = casts;
    if (!casts) {
      return;
    }
    setMovieCast((prev) => [cast, ...prev]);
    setCast("");
  }

  return (
    <Fragment>
      <section className={classes.section}>
        <Header>upload a new movie</Header>
        <div className={classes.container}>
          <form onSubmit={uploadHandler}>
            <div className={classes.detail}>
              <label>Movie Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
            </div>
            <div className={classes.detail}>
              <label>price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="text"
              />
            </div>
            <div className={classes.detail}>
              <label>casts</label>
              <div className={classes.cast}>
                <input
                  onChange={(e) => setCast(e.target.value)}
                  value={casts}
                  type="text"
                />
                <button type="button" onClick={castHandler}>
                  +
                </button>
              </div>
            </div>
            <div className={classes.detail}>
              <label>description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                rows="2"
                value={description}
              />
            </div>
            <div className={classes.detail}>
              <label>time</label>
              <input
                onChange={(e) => setTime(e.target.value)}
                value={time}
                type="text"
              />
            </div>
            <div className={classes.detail}>
              <label>movie image</label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
              />
            </div>

            <div className="action">
              <button onClick={() => router.replace("/admin")} type="button">
                go back
              </button>
              <button>upload</button>
            </div>
          </form>
        </div>
        <ToastContainer position="top-right" autoClose={2000} />
      </section>
      {loading && <Spinner />}
    </Fragment>
  );
}
