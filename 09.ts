interface Shape {
    type: "circle" | "square";
    color: string;
    size: number;
    dimension: number;
    backgroundColor: string;
    isSquare: boolean;
    readonly name: string; 
   
    getSize(): number;
    getDimension(): number;

    setColor(newColor: string): void;
  }
  
  class ShapeImpl implements Shape {
    static counter: number = 1; 
    type: "circle" | "square";
    color: string;
    size: number;
    dimension: number;
    backgroundColor: string;
    isSquare: boolean;
    private _name: string; 
  
    constructor(type: "circle" | "square", color: string, size: number, dimension: number, backgroundColor: string, isSquare: boolean) {
      this.type = type;
      this.color = color;
      this.size = size;
      this.dimension = dimension;
      this.backgroundColor = backgroundColor;
      this.isSquare = isSquare;
      this._name = `${type}_${ShapeImpl.counter++}`;
    }
  
    getSize(): number {
      return this.size;
    }
  
    getDimension(): number {
      return this.dimension;
    }
  
    get name(): string {
      return this._name;
    }
  
    setColor(newColor: string): void {
      this.color = newColor;
    }
  }
  
  const shapesArray: Shape[] = [
    new ShapeImpl("circle", "brown", 10, 20, "lightbrown", false),
    new ShapeImpl("square", "blue", 15, 5, "lightblue", true),
    new ShapeImpl("circle", "green", 8, 16, "lightgreen", false),
    new ShapeImpl("square", "yellow", 12, 6, "lightyellow", true)
  ];
  
  console.log(shapesArray);
  
  
