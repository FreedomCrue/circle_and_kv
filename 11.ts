interface Shape {
    type: "circle" | "square";
    color: string;
    size: number;
    dimension: number;
    backgroundColor: string;
    figureType: string; 
    readonly name: string;
  
    getSize(): number;
    getDimension(): number;
  
    setColor(newColor: string): void;
  }
  
  interface Item extends Shape {
    x: number;
    y: number;
  }
  
  class ShapeTemplate implements Shape {
    type: "circle" | "square";
    color: string;
    size: number;
    dimension: number;
    backgroundColor: string;
    figureType: string; 
    readonly name: string;
  
    constructor(type: "circle" | "square", color: string, size: number, dimension: number, backgroundColor: string, figureType: string) {
      this.type = type;
      this.color = color;
      this.size = size;
      this.dimension = dimension;
      this.backgroundColor = backgroundColor;
      this.figureType = figureType; 
      this.name = `${type}_${ShapeTemplate.counter++}`;
    }
  
    getSize(): number {
      return this.size;
    }
  
    getDimension(): number {
      return this.dimension;
    }
  
    setColor(newColor: string): void {
      this.color = newColor;
    }
  }
  
  class ItemInstance implements Item {
    private static counter: number = 1;
    type: "circle" | "square";
    color: string;
    size: number;
    dimension: number;
    backgroundColor: string;
    figureType: string; 
    readonly name: string;
    x: number;
    y: number;
  
    constructor(template: ShapeTemplate, x: number, y: number) {
      this.type = template.type;
      this.color = template.color;
      this.size = template.size;
      this.dimension = template.dimension;
      this.backgroundColor = template.backgroundColor;
      this.figureType = template.figureType; 
      this.name = `${template.type}_${ItemInstance.counter++}`;
      this.x = x;
      this.y = y;
    }
  
    getSize(): number {
      return this.size;
    }
  
    getDimension(): number {
      return this.dimension;
    }
  
    setColor(newColor: string): void {
      this.color = newColor;
    }
  }
  
  const shapeTemplates: ShapeTemplate[] = [
    new ShapeTemplate("circle", "brown", 10, 20, "lightbrown", "not square"),
    new ShapeTemplate("square", "blue", 15, 5, "lightblue", "square"),
    new ShapeTemplate("circle", "green", 8, 16, "lightgreen", "not square"),
    new ShapeTemplate("square", "yellow", 12, 6, "lightyellow", "square")
  ];
  
  const items: Item[] = [
    new ItemInstance(shapeTemplates[0], 30, 40),
    new ItemInstance(shapeTemplates[1], 50, 60),
    new ItemInstance(shapeTemplates[2], 70, 80),
    new ItemInstance(shapeTemplates[3], 90, 100)
  ];
  
  console.log(shapeTemplates);
  console.log(items);
  