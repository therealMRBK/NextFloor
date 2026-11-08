---
title: Eigene 3D-Modelle
description: Ein eigenes GLB-Modell für einen Fahrzeug-Platz hochladen: wie NextFloor es vorbereitet und wie du eines von Hand vorbereitest.
---

Du kannst ein eigenes `.glb`-Modell für einen Fahrzeug-Platz hochladen. Der Browser dreht es richtig herum, macht es leichter, entfernt Texturen und markiert den Lack. Die Datei liegt danach auf deinem Home Assistant (nur Administratoren, bis 12 MB).

> [!NOTE]
> Dieser technische Teil ist noch auf Englisch, damit Beispiele und Feldnamen eindeutig bleiben. Eine deutsche Fassung ist willkommen: [Mitmachen](contributing.md).

## How it works

- A pack item can name a model (`"mesh": "tesla_model_y"`). When the file `tesla_model_y.glb` exists in the folder
  `nextfloor_meshes` of your Home Assistant configuration, the 3D view draws it, stretched to the size of the item.
  Everyone who is logged in to Home Assistant can read it, nobody else.
- The model's body paint follows the colour you pick in the editor (the round colour dots under the item's
  settings). That works for parts whose material is marked as paint (see below).
- Parts of the model that are not paint (glass, tyres, trim) stay as they are.

## Putting a model on your Home Assistant

**The easy way:** open the Extensions page of NextFloor (as administrator). Every item that takes a model is listed
with an "Add a model" button. Choose your `.glb`, turn its front towards the viewer, check which material is the body
paint (NextFloor guesses it), pick a level of detail and look at the preview. "Store on Home Assistant" does the rest;
reload the panel afterwards. Compressed files (Draco, Meshopt, KTX) are refused: export the model without compression.

**By hand:**

1. Get a model you may use, as a binary glTF (`.glb`), for example a purchased one. Check its licence: it must
   allow you to use it in your own installation.
2. Prepare it (lighter, front to +z, paint marked), see below.
3. Copy the result to `<config>/nextfloor_meshes/<id>.glb`, with the id from the table, **or** upload it as an
   administrator:

   ```
   curl -X POST -H "Authorization: Bearer <long-lived access token>" \
        --data-binary @tesla_model_y.glb http://homeassistant.local:8123/api/nextfloor/mesh/tesla_model_y
   ```

4. Reload the NextFloor panel.

| Item | Model id |
| --- | --- |
| Tesla Model 3 | `tesla_model_3` |
| Tesla Model 3 (2024) | `tesla_model_3_2024` |
| Tesla Model 3 Performance (2024) | `tesla_model_3_2024_performance` |
| Tesla Model S | `tesla_model_s` |
| Tesla Model S Plaid | `tesla_model_s_plaid` |
| Tesla Model X | `tesla_model_x` |
| Tesla Model Y | `tesla_model_y` |
| Tesla Model Y Standard (2025) | `tesla_model_y_2025` |
| Tesla Model Y Premium (2025) | `tesla_model_y_2025_premium` |
| Tesla Model Y Performance (2025) | `tesla_model_y_2025_performance` |
| Tesla Model Y L | `tesla_model_y_l` |
| Tesla Cybertruck | `tesla_cybertruck` |

## Preparing a model by hand

The Extensions page does this in the browser. If you prefer the command line:

The 3D view reads plain binary glTF without Draco compression and without textures, and a model with 200,000
triangles would be too heavy for a tablet. `tools/prepare-model.mjs` does the work:

```
npm install @gltf-transform/core @gltf-transform/extensions @gltf-transform/functions draco3dgltf meshoptimizer
node tools/prepare-model.mjs original.glb tesla_model_y.glb --ratio=0.35 --rear=^Charge --paint=^Paint --drop-materials="Fade|^Light$" --drop="^(Fade|Underhood_Piece)"
```

`--front` (or `--rear`, for a part at the back such as the charge port) is a pattern for the name of a part that tells which end is which, so the car points to +z; `--drop-materials` leaves out see-through fade layers and light beams that would float around the car; `--paint` is a pattern for the material
names of the body paint. Both depend on how your model's author named things; open the file in a glTF viewer to look.
With a ratio of 0.35, a Model Y has about 70,000 triangles and 1 MB.

## Licence note

The model files are yours and stay on your Home Assistant. Do not put them in a public repository, and do not share
them in a pack. Vehicle names are trademarks of their owners; NextFloor uses them only to say which model is meant.
