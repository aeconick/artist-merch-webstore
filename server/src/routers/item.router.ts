import { Router } from "express";
import { sample_items, sample_tags } from "../data";

const router = Router();

router.get("/", (req, res) => {
  res.send(sample_items);
});

router.get("/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const items = sample_items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(items);
});

router.get("/tags", (req, res) => {
  res.send(sample_tags);
});

router.get("/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const items = sample_items.filter((item) => item.tags?.includes(tagName));
  res.send(items);
});

router.get("/:itemId", (req, res) => {
  const itemId = req.params.itemId;
  const item = sample_items.find((item) => item.id == itemId);
  res.send(item);
});

export default router;
