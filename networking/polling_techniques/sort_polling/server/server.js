import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

let problems = [
  {
    id: 0,
    title: "Polyfill of Array.map",
    description: "Some description",
  },
  {
    id: 1,
    title: "Polyfill of Promise.all()",
    description: "Some description",
  },
];

app.get("/api/problems", (req, res) => {
  res.json(problems);
});

app.post("/api/problems", (req, res) => {
  const body = req.body;
  problems = [...problems, body];
  res.json(problems);
});

app.put("/api/problems/:id", (req, res) => {
  const body = req.body;
  const id = req.params.id;

  problems = problems.map((p) => {
    if (p.id == id) {
      return {
        id,
        ...body,
      };
    }
    return p;
  });

  res.json(problems);
});


app.listen(PORT, () => {
  console.log(`The server was up and running at port:${PORT}`);
});
