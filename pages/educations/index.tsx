import type { NextPage } from "next";
import Head from "next/head";

export default function index() {
  return (
    <>
      <h1>educations</h1>
      {new Array(100).fill(1).map((e, i) => (
        <p key={i}>
          The index of all education asdf f asfsda fdsa f afdsafsfdsaf asfd saf
          asf asfasdfas asfdsafs
        </p>
      ))}
    </>
  );
}
