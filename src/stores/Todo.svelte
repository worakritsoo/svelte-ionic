{#each $todos as todo}
  <TodoItem {...todo} on:remove="{removeItem}" on:toggle="{updateStatus}" />
{/each}
<input bind:value="{text}" />

<style>
input {
  display: block;
}
</style>

<script>
import TodoItem from "./TodoItem.svelte";
import { db } from "./firebase";
import { collectionData } from "rxfire/firestore";
import { startWith } from "rxjs/operators";

// User ID passed from parent
export let uid;

// Form Text
let text = "some task";

// Query requires an index, see screenshot below
const query = db.collection("todos").where("uid", "==", uid).orderBy("created");

const todos = collectionData(query, "id").pipe(startWith([]));

function add() {
  db.collection("todos").add({
    uid,
    text,
    complete: false,
    created: Date.now(),
  });
  text = "";
}

function updateStatus(event) {
  const { id, newStatus } = event.detail;
  db.collection("todos").doc(id).update({ complete: newStatus });
}

function removeItem(event) {
  const { id } = event.detail;
  db.collection("todos").doc(id).delete();
}
</script>
